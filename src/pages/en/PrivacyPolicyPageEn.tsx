import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';
import { SITE } from '../../config/site';

export default function PrivacyPolicyPageEn() {
  return (
    <>
      <Seo 
        lang="en"
        title="Legal Notice & Privacy Policy | BE CUTE SPA Rabat"
        description="Legal notice and privacy policy of BE CUTE SPA, beauty institute and spa in Rabat Agdal."
        canonicalPath="/en/legal"
        alternatePaths={[{ lang: 'fr', path: '/mentions-legales' }]}
      />
      <main className="bg-ivory-50">
        <PageHero title="Legal Notice" />
        
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 text-ink/80 font-light leading-relaxed">
          <h2 className="text-2xl text-gold-700 mb-4">1. Site Publisher</h2>
          <p className="mb-8">The BE CUTE SPA website is published by {SITE.name}, located at {SITE.street}, {SITE.postalCode} {SITE.city}, {SITE.country}.</p>
          
          <h2 className="text-2xl text-gold-700 mb-4">2. Hosting</h2>
          <p className="mb-8">This site is hosted by Vercel / AWS.</p>
          
          <h2 className="text-2xl text-gold-700 mb-4">3. Personal Data Protection (GDPR)</h2>
          <p className="mb-4">
            In accordance with current laws regarding personal data protection, 
            we inform you that data collected via our contact or booking forms 
            is strictly confidential.
          </p>
          <p className="mb-8">
            It is used solely for the purpose of processing your requests and will 
            never be shared with third parties without your prior consent.
          </p>
          
          <h2 className="text-2xl text-gold-700 mb-4">4. Intellectual Property</h2>
          <p className="mb-8">
            All content (texts, images, videos) present on this site is the 
            exclusive property of BE CUTE SPA. Any reproduction is prohibited 
            without express authorization.
          </p>
        </div>
      </main>
    </>
  );
}