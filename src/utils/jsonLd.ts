import { SITE } from '../config/site';
import { servicesData } from '../data/services';
import type { BlogPost } from '../data/blog';

export function generateArticleJsonLd(article: BlogPost, lang: 'fr' | 'en') {
  const url = `${SITE.origin}${lang === 'fr' ? '/blog/' : '/en/blog/'}${lang === 'fr' ? article.slugFr : article.slugEn}`;
  
  return {
    "@type": "Article",
    "headline": lang === 'fr' ? article.titleFr : article.titleEn,
    "description": lang === 'fr' ? article.excerptFr : article.excerptEn,
    "image": `${SITE.origin}${article.featuredImage}`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.origin
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE.origin}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateOfferCatalogJsonLd() {
  const offers: Record<string, unknown>[] = [];
  
  servicesData.hammam.forEach(service => {
    offers.push({
      "@type": "Offer",
      "price": service.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock",
      "areaServed": { "@type": "City", "name": "Rabat" },
      "itemOffered": {
        "@type": "Service",
        "name": service.nameFr,
        "serviceType": "Hammam marocain"
      }
    });
  });

  servicesData.massages.forEach(service => {
    service.durations.forEach(duration => {
      offers.push({
        "@type": "Offer",
        "price": duration.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "MAD",
        "availability": "https://schema.org/InStock",
        "areaServed": { "@type": "City", "name": "Rabat" },
        "itemOffered": {
          "@type": "Service",
          "name": `${service.nameFr} ${duration.time}`,
          "serviceType": "Massage"
        }
      });
    });
  });

  servicesData.packages.forEach(service => {
    offers.push({
      "@type": "Offer",
      "price": service.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock",
      "areaServed": { "@type": "City", "name": "Rabat" },
      "itemOffered": {
        "@type": "Service",
        "name": service.nameFr,
        "serviceType": "Package Spa"
      }
    });
  });

  return {
    "@type": "OfferCatalog",
    "name": `Soins ${SITE.name}`,
    "itemListElement": offers
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; item?: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.item ? { "item": `${SITE.origin}${item.item}` } : {})
    }))
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.origin}/#website`,
    "url": `${SITE.origin}/`,
    "name": SITE.name,
    "publisher": {
      "@id": `${SITE.origin}/#business`
    }
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE.origin}/#business`,
    "name": SITE.name,
    "url": `${SITE.origin}/`,
    "logo": `${SITE.origin}/logo.png`,
    "image": `${SITE.origin}/logo.png`,
    "telephone": SITE.phoneE164,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.street,
      "addressLocality": SITE.city,
      "postalCode": SITE.postalCode,
      "addressRegion": SITE.region,
      "addressCountry": SITE.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.lat,
      "longitude": SITE.lng
    },
    "openingHoursSpecification": SITE.openingHours.schema.map(spec => {
      const [days, times] = spec.split(' ');
      const [opens, closes] = times.split('-');
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days.split(','),
        "opens": opens,
        "closes": closes
      };
    }),
    "sameAs": [SITE.instagram, SITE.gbpUrl]
  };
}
