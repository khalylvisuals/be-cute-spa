import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

const origin = 'https://bcsparabat.com';

// Read the blog data directly by parsing the TS file to avoid TS execution issues in Node
const blogDataPath = path.join(root, 'src', 'data', 'blog.ts');
const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');

const articleRegex = /slugFr:\s*['"]([^'"]+)['"][\s\S]*?slugEn:\s*['"]([^'"]+)['"][\s\S]*?datePublished:\s*['"]([^'"]+)['"]/g;

const articles = [];
let match;
while ((match = articleRegex.exec(blogDataContent)) !== null) {
  articles.push({
    slug: match[1],
    enSlug: match[2],
    date: match[3]
  });
}

// Define the routes that should be in the sitemap
const staticRoutes = [
  '/',
  '/a-propos',
  '/services',
  '/tarifs',
  '/galerie',
  '/contact',
  '/mentions-legales',
  '/blog',
  '/spa-rabat',
  
  // English Routes
  '/en',
  '/en/about',
  '/en/services',
  '/en/pricing',
  '/en/gallery',
  '/en/contact',
  '/en/legal',
  '/en/blog'
  ,'/en/spa-rabat'
];

const routes = staticRoutes.map(path => ({ path }));

for (const article of articles) {
  routes.push({
    path: `/blog/${article.slug}`,
    lastmod: article.date
  });
  routes.push({
    path: `/en/blog/${article.enSlug}`,
    lastmod: article.date
  });
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of routes) {
  // Ensure trailing slash for all routes except the root if it already has one, but usually it's fine.
  // Actually, for root '/', the trailing slash is just '/'
  const loc = route.path === '/' ? `${origin}/` : `${origin}${route.path}/`;
  sitemap += `  <url>\n    <loc>${loc}</loc>\n`;
  if (route.lastmod) {
    sitemap += `    <lastmod>${route.lastmod}</lastmod>\n`;
  }
  sitemap += `  </url>\n`;
}

sitemap += `</urlset>\n`;

const destPathPublic = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(destPathPublic, sitemap, 'utf-8');

const destPathDist = path.join(root, 'dist', 'sitemap.xml');
if (fs.existsSync(path.join(root, 'dist'))) {
  fs.writeFileSync(destPathDist, sitemap, 'utf-8');
}

console.log(`Generated sitemap.xml with ${routes.length} URLs`);
