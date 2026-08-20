import Seo from '../../components/Seo';
import HeroEn from '../../components/en/HeroEn';
import PackagesEn from '../../components/en/PackagesEn';
import WhyChooseUsEn from '../../components/en/WhyChooseUsEn';
import ServicesGridEn from '../../components/en/ServicesGridEn';
import EditorialGalleryEn from '../../components/en/EditorialGalleryEn';
import ReviewsEn from '../../components/en/ReviewsEn';
import FindUsEn from '../../components/en/FindUsEn';
import ContactHomeEn from '../../components/en/ContactHomeEn';
import { SITE } from '../../config/site';
import { generateOfferCatalogJsonLd } from '../../utils/jsonLd';

export default function HomePageEn() {
  const homeJsonLd = {
    "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": `${SITE.origin}/#business`,
    "name": SITE.name,
    "alternateName": SITE.legalName,
    "url": `${SITE.origin}/en/`,
    "image": [`${SITE.origin}/images/spa-rabat-agdal-1.jpg`],
    "logo": `${SITE.origin}/logo.png`,
    "telephone": SITE.phoneE164,
    "description": "Spa, traditional Moroccan hammam and massages in Rabat Agdal.",
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
        lang="en"
        title="Rabat Agdal Spa | Moroccan Hammam & Massage | BE CUTE SPA"
        description="Spa in Rabat Agdal: traditional Moroccan hammam, relaxing massage and wellness packs. Open 7 days a week until 11pm. Booking: 05 37 68 24 27."
        canonicalPath="/en"
        alternatePaths={[{ lang: 'fr', path: '/' }]}
        preloadImage={`${import.meta.env.BASE_URL}images/hero-spa-ritual.png`}
        jsonLd={[homeJsonLd]}
      />
      <main>
        <HeroEn />
        <WhyChooseUsEn />
        <ServicesGridEn />
        <EditorialGalleryEn />
        <PackagesEn />
        <ReviewsEn />
        <FindUsEn />
        <ContactHomeEn />
      </main>
    </>
  );
}
