const fs = require('fs');
const path = require('path');
const blogDataContent = fs.readFileSync(path.join(__dirname, '../src/data/blog.ts'), 'utf-8');
const articleRegex = /slug:\s*['"]([^'"]+)['"][\s\S]*?enSlug:\s*['"]([^'"]+)['"][\s\S]*?date:\s*['"]([^'"]+)['"]/g;
const articles = [];
let match;
while ((match = articleRegex.exec(blogDataContent)) !== null) {
  articles.push({ slug: match[1], enSlug: match[2], date: match[3] });
}
console.log(articles);
