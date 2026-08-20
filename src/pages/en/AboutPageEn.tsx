import Seo from '../../components/Seo';
import AboutHeroEn from '../../components/en/AboutHeroEn';
import AboutContentEn from '../../components/en/AboutContentEn';
import { SITE } from '../../config/site';

export default function AboutPageEn() {
  return (
    <>
      <Seo 
        lang="en"
        title="About Us | Spa & Hammam in Rabat Agdal | BE CUTE SPA"
        description={`BE CUTE SPA, the art of wellness in Rabat Agdal: discover our story, our authentic Moroccan rituals, and our relaxation area. ${SITE.reviewCount} Google reviews.`}
        canonicalPath="/en/about"
        alternatePaths={[{ lang: 'fr', path: '/a-propos' }]}
      />
      <main>
        <AboutHeroEn />
        <AboutContentEn />
      </main>
    </>
  );
}
