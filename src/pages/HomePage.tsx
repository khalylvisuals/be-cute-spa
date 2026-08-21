import Seo from '../components/Seo';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';

import Reviews from '../components/Reviews';
import FindUs from '../components/FindUs';
import ContactHome from '../components/ContactHome';
import { SITE } from '../config/site';
import { generateOfferCatalogJsonLd } from '../utils/jsonLd';

export default function HomePage() {
  const homeJsonLd = {
    "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": `${SITE.origin}/#business`,
    "name": SITE.name,
    "alternateName": SITE.legalName,
    "url": `${SITE.origin}/`,
    "image": [`${SITE.origin}/images/spa-rabat-agdal-1.jpg`],
    "logo": `${SITE.origin}/logo.png`,
    "telephone": SITE.phoneE164,
    "description": "Spa, hammam marocain traditionnel et massages à Rabat Agdal.",
    "priceRange": "300-600 MAD",
    "currenciesAccepted": "MAD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.street,
      "addressLocality": SITE.city,
      "addressRegion": SITE.region,
      "postalCode": SITE.postalCode,
      "addressCountry": SITE.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.lat,
      "longitude": SITE.lng
    },
    "hasMap": SITE.gbpUrl,
    "areaServed": [
      { "@type": "City", "name": "Rabat" },
      { "@type": "Place", "name": "Agdal, Rabat" },
      { "@type": "Place", "name": "Hay Riad, Rabat" },
      { "@type": "Place", "name": "Souissi, Rabat" }
    ],
    "openingHoursSpecification": SITE.openingHours.schema.map(spec => {
      const [days, hours] = spec.split(' ');
      const [opens, closes] = hours.split('-');
      return days.split(',').map(day => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": day,
        "opens": opens,
        "closes": closes
      }));
    }).flat(),
    "sameAs": [SITE.instagram, SITE.gbpUrl],
    "hasOfferCatalog": generateOfferCatalogJsonLd()
  };

  return (
    <>
      <Seo 
        title="BE CUTE SPA: Spa, Massage & Hammam Premium à Rabat Agdal"     
        description="BE CUTE SPA - Spa, hammam marocain traditionnel, massage relaxant et packs bien-être. Ouvert 7j/7 jusqu'à 23h. Tél: 05 37 68 24 27."
        canonicalPath="/"
        preloadImage={`${import.meta.env.BASE_URL}images/hero-spa-ritual.png`}
        alternatePaths={[
          { lang: 'en', path: '/en' }
        ]}
        jsonLd={[homeJsonLd]}
      />
      <main>
        <Hero />
        <ServicesGrid />
        <Packages />        
        <WhyChooseUs />
       <FaqSection />
        <Reviews />
        <FindUs />
        <ContactHome />
      </main>
    </>
  );
}
