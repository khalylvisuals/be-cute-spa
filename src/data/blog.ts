
export interface BlogPost {
  id: string;
  slugFr: string;
  slugEn: string;
  categoryFr: string;
  categoryEn: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  featuredImage: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  seoTitleFr: string;
  seoTitleEn: string;
  metaDescFr: string;
  metaDescEn: string;
}

export const BLOG_CATEGORIES_FR = ['Tous', 'Hammam', 'Massage', 'Spa & Bien-être', 'Rabat & Agdal', 'Conseils'];
export const BLOG_CATEGORIES_EN = ['All', 'Hammam', 'Massage', 'Spa & Wellness', 'Rabat & Agdal', 'Advice'];

export const BLOG_ARTICLES: BlogPost[] = [
  {
    id: 'prix-hammam-massage-rabat',
    slugFr: 'prix-hammam-massage-rabat',
    slugEn: 'hammam-massage-prices-rabat',
    categoryFr: 'Rabat & Agdal',
    categoryEn: 'Rabat & Agdal',
    titleFr: 'Quel est le prix d\'un hammam à Rabat ? Guide complet 2026',
    titleEn: 'What is the price of a hammam in Rabat? Complete 2026 Guide',
    excerptFr: 'Découvrez les vrais prix d\'un hammam et massage à Rabat. Des tarifs transparents, ce qui influence le coût et comment bien choisir son expérience spa.',
    excerptEn: 'Discover the real prices of a hammam and massage in Rabat. Transparent pricing, what influences the cost, and how to choose your spa experience.',
    featuredImage: '/images/hero-spa-ritual.png',
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    readingTime: '4 min',
    seoTitleFr: 'Prix Hammam & Massage Rabat (2026) | Guide des Tarifs | BE CUTE SPA',
    seoTitleEn: 'Hammam & Massage Prices in Rabat (2026) | Pricing Guide | BE CUTE SPA',
    metaDescFr: 'Combien coûte un hammam à Rabat ? Découvrez notre guide des prix 2026 pour les hammams traditionnels, massages et forfaits spa à Rabat Agdal.',
    metaDescEn: 'How much does a hammam cost in Rabat? Discover our 2026 pricing guide for traditional hammams, massages, and spa packages in Rabat Agdal.'
  },
  {
    id: 'bienfaits-hammam-marocain',
    slugFr: 'bienfaits-hammam-marocain',
    slugEn: 'moroccan-hammam-benefits',
    categoryFr: 'Hammam',
    categoryEn: 'Hammam',
    titleFr: 'Les bienfaits du hammam marocain : guide complet',
    titleEn: 'The benefits of the Moroccan hammam: a complete guide',
    excerptFr: 'Purification de la peau, détente musculaire, évacuation du stress... Découvrez pourquoi le rituel du hammam traditionnel est essentiel à votre bien-être.',
    excerptEn: 'Skin purification, muscle relaxation, stress relief... Discover why the traditional hammam ritual is essential for your well-being.',
    featuredImage: '/images/services/service-hammam-traditionnel.png',
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
    readingTime: '5 min',
    seoTitleFr: 'Bienfaits du Hammam Marocain | Purifier Corps et Esprit | BE CUTE SPA',
    seoTitleEn: 'Moroccan Hammam Benefits | Purify Body and Mind | BE CUTE SPA',
    metaDescFr: 'Découvrez tous les bienfaits du hammam marocain sur la peau, la circulation et le stress. Un rituel de purification profond à vivre chez BE CUTE SPA Rabat.',
    metaDescEn: 'Discover all the benefits of the Moroccan hammam on the skin, circulation, and stress. A deep purification ritual to experience at BE CUTE SPA Rabat.'
  },
  {
    id: 'meilleur-spa-rabat-comment-choisir',
    slugFr: 'meilleur-spa-rabat-comment-choisir',
    slugEn: 'best-spa-rabat-how-to-choose',
    categoryFr: 'Conseils',
    categoryEn: 'Advice',
    titleFr: 'Comment choisir un spa à Rabat Agdal ?',
    titleEn: 'How to choose a spa in Rabat Agdal?',
    excerptFr: 'Hygiène, intimité, qualité des soins et prix : les critères essentiels pour bien choisir votre spa et votre hammam au cœur de la capitale.',
    excerptEn: 'Hygiene, privacy, treatment quality, and price: the essential criteria for choosing your spa and hammam in the heart of the capital.',
    featuredImage: '/images/services/service-massage-relaxant.png',
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    readingTime: '3 min',
    seoTitleFr: 'Comment Choisir un Spa à Rabat Agdal ? (Guide 2026) | BE CUTE SPA',
    seoTitleEn: 'How to Choose a Spa in Rabat Agdal? (2026 Guide) | BE CUTE SPA',
    metaDescFr: 'Vous cherchez le meilleur spa à Rabat ? Voici les critères indispensables (hygiène, rituels, avis) pour bien choisir votre établissement bien-être à l\'Agdal.',
    metaDescEn: 'Looking for the best spa in Rabat? Here are the essential criteria (hygiene, rituals, reviews) to properly choose your wellness establishment in Agdal.'
  }
];

export function getArticleBySlug(slug: string, lang: 'fr' | 'en'): BlogPost | undefined {
  return BLOG_ARTICLES.find(article => lang === 'fr' ? article.slugFr === slug : article.slugEn === slug);
}

export function getRelatedArticles(currentId: string, limit = 2): BlogPost[] {
  return BLOG_ARTICLES.filter(article => article.id !== currentId).slice(0, limit);
}
