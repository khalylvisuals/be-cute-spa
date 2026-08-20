import Seo from '../../components/Seo';
import ServicesHeroEn from '../../components/en/ServicesHeroEn';
import ServicesMenuEn from '../../components/en/ServicesMenuEn';
import { generateOfferCatalogJsonLd } from '../../utils/jsonLd';

export default function ServicesPageEn() {
  return (
    <>
      <Seo 
        lang="en"
        title="Our Treatments : Hammam & Massage in Rabat | BE CUTE SPA"
        description="Discover our Moroccan hammams (traditional, royal, sultan) and relaxing, Swedish, and back & neck massages in Rabat Agdal. Durations, prices, and booking."
        canonicalPath="/en/services"
        alternatePaths={[{ lang: 'fr', path: '/services' }]}
        jsonLd={[generateOfferCatalogJsonLd()]}
      />
      <main>
        <ServicesHeroEn />
        <ServicesMenuEn />
      </main>
    </>
  );
}
