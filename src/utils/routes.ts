import { BLOG_ARTICLES } from '../data/blog';

export const routeMap: Record<string, string> = {
  '/': '/en',
  '/a-propos': '/en/about',
  '/services': '/en/services',
  '/tarifs': '/en/pricing',
  '/galerie': '/en/gallery',
  '/blog': '/en/blog',
  '/contact': '/en/contact',
  '/mentions-legales': '/en/legal',
  '/spa-rabat': '/en/spa-rabat'
};

/**
 * Gets the equivalent route in the target language.
 * @param currentPath The current path (e.g. '/a-propos' or '/en/about')
 * @param targetLang The language to switch to ('fr' or 'en')
 */
export function getEquivalentRoute(currentPath: string, targetLang: 'fr' | 'en'): string {
  // Strip trailing slash if present (except for root)
  const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  // Preserve the exact translated article when switching language.
  if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '');
    const article = BLOG_ARTICLES.find(item => item.slugFr === slug);
    return targetLang === 'en' && article ? `/en/blog/${article.slugEn}` : normalizedPath;
  }
  if (normalizedPath.startsWith('/en/blog/')) {
    const slug = normalizedPath.replace('/en/blog/', '');
    const article = BLOG_ARTICLES.find(item => item.slugEn === slug);
    return targetLang === 'fr' && article ? `/blog/${article.slugFr}` : normalizedPath;
  }

  if (targetLang === 'en') {
    // If we're already on an EN route, return it
    if (normalizedPath.startsWith('/en')) return normalizedPath;
    return routeMap[normalizedPath] || '/en';
  } else {
    // Target is FR. If we're already on a FR route, return it
    if (!normalizedPath.startsWith('/en') && normalizedPath !== '/spa-rabat') return normalizedPath;
    // Find the FR equivalent
    const frRoute = Object.keys(routeMap).find(key => routeMap[key] === normalizedPath);
    return frRoute || '/';
  }
}
