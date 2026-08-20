import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import { SITE } from '../config/site';

export default function AboutPage() {
  return (
    <>
      <Seo 
        title="À propos | Spa & Hammam à Rabat Agdal | BE CUTE SPA"
        description={`BE CUTE SPA, l'art du bien-être à Rabat Agdal : découvrez notre histoire, nos rituels marocains authentiques et notre espace de détente. ${SITE.reviewCount} avis Google.`}
        canonicalPath="/a-propos"
        alternatePaths={[{ lang: 'en', path: '/en/about' }]}
      />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
    </>
  );
}