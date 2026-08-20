import Seo from '../components/Seo';
import GalleryHero from '../components/GalleryHero';
import EditorialGallery from '../components/EditorialGallery';

export default function GalleryPage() {
  return (
    <>
      <Seo 
        title="Galerie Photos | Spa & Hammam Rabat | BE CUTE SPA"
        description="Découvrez en images l'univers de BE CUTE SPA à Rabat Agdal : hammam traditionnel, cabines de massage privées et espace de relaxation."
        canonicalPath="/galerie"
        alternatePaths={[{ lang: 'en', path: '/en/gallery' }]}
      />
      <main>
        <GalleryHero />
        <EditorialGallery />
      </main>
    </>
  );
}
