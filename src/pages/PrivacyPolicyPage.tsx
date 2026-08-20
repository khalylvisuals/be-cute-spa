import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { SITE } from '../config/site';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo 
        title="Mentions Légales & Confidentialité | BE CUTE SPA Rabat"
        description="Mentions légales et politique de confidentialité de BE CUTE SPA, institut de beauté et spa à Rabat Agdal."
        canonicalPath="/mentions-legales"
        alternatePaths={[{ lang: 'en', path: '/en/legal' }]}
      />
      <main className="bg-ivory-50 min-h-[calc(100vh-300px)]">
        <PageHero title="Mentions Légales" />
        
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 text-ink/80 font-light leading-relaxed">
          <h2 className="text-2xl text-gold-700 mb-4">1. Éditeur du site</h2>
          <p className="mb-8">Le site BE CUTE SPA est édité par la société {SITE.name}, située à {SITE.street}, {SITE.postalCode} {SITE.city}, {SITE.country}.</p>
          
          <h2 className="text-2xl text-gold-700 mb-4">2. Hébergement</h2>
          <p className="mb-8">Ce site est hébergé par Vercel / AWS.</p>
          
          <h2 className="text-2xl text-gold-700 mb-4">3. Protection des données personnelles (RGPD)</h2>
          <p className="mb-4">
            Conformément à la loi en vigueur relative à la protection des données personnelles, 
            nous vous informons que les données recueillies via nos formulaires de contact ou 
            de réservation sont strictement confidentielles.
          </p>
          <p className="mb-8">
            Elles sont utilisées uniquement dans le but de traiter vos demandes et ne seront 
            jamais cédées à des tiers sans votre accord préalable.
          </p>
          
          <h2 className="text-2xl text-gold-700 mb-4">4. Propriété intellectuelle</h2>
          <p className="mb-8">
            L'ensemble des contenus (textes, images, vidéos) présents sur ce site sont 
            la propriété exclusive de BE CUTE SPA. Toute reproduction est interdite sans 
            autorisation expresse.
          </p>
        </div>
      </main>
    </>
  );
}