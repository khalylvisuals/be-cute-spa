import Seo from '../components/Seo';
import ServicesHero from '../components/ServicesHero';
import ServicesMenu from '../components/ServicesMenu';
import { generateOfferCatalogJsonLd } from '../utils/jsonLd';

export default function ServicesPage() {
  return (
    <>
      <Seo 
        title="Nos Soins : Hammam & Massage à Rabat | BE CUTE SPA"
        description="Découvrez nos hammams marocains (traditionnel, royale, sultan) et massages relaxant, suédois et dos & nuque à Rabat Agdal. Durées, tarifs et réservation."
        canonicalPath="/services"
        alternatePaths={[{ lang: 'en', path: '/en/services' }]}
        jsonLd={[generateOfferCatalogJsonLd()]}
      />
      <main>
        <ServicesHero />
        <ServicesMenu />
      </main>
    </>
  );
}