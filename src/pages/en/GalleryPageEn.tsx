import Seo from '../../components/Seo';
import GalleryHeroEn from '../../components/en/GalleryHeroEn';
import EditorialGalleryEn from '../../components/en/EditorialGalleryEn';

export default function GalleryPageEn() {
  return (
    <>
      <Seo 
        lang="en"
        title="Photo Gallery | Spa & Hammam Rabat | BE CUTE SPA"
        description="Discover the BE CUTE SPA universe in pictures: traditional hammam, private massage cabins, and relaxation area in Rabat Agdal."
        canonicalPath="/en/gallery"
        alternatePaths={[{ lang: 'fr', path: '/galerie' }]}
      />
      <main>
        <GalleryHeroEn />
        <EditorialGalleryEn />
      </main>
    </>
  );
}
