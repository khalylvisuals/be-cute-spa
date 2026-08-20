import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

export default function SpaRabatPageEn() {
  return <>
    <Seo lang="en" title="Spa in Rabat Agdal | Hammam & Massage | BE CUTE SPA" description="Discover BE CUTE SPA in Rabat Agdal: traditional Moroccan hammam rituals, relaxing massage and transparent prices." canonicalPath="/en/spa-rabat" alternatePaths={[{ lang: 'fr', path: '/spa-rabat' }]} />
    <main className="bg-ivory-50">
      <PageHero title="Spa in Rabat" />
      <section className="section-padding bg-cream-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-ink/80 font-light leading-relaxed space-y-10">
          <div><h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">A hammam ritual in Agdal</h2><p>On Rue Aguelmane Sidi Ali in Agdal, BE CUTE SPA offers a considered pause shaped around the Moroccan hammam ritual. Every treatment is clearly described, making it easier to choose your moment of wellness in Rabat.</p></div>
          <div><h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">What is on the menu</h2><p className="mb-4">Our menu brings together three Moroccan hammam rituals, relaxing, Swedish and back & neck massage, plus Signature packages combining hammam and massage.</p><p>Black soap, tebrima, exfoliation, ghassoul and orange blossom appear in the rituals according to the selected treatment. See the <Link to="/en/services" className="text-gold-700 underline underline-offset-4">full treatment menu</Link> for inclusions and booking.</p></div>
          <div><h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">Clear prices, simple booking</h2><p>Durations and prices are displayed before booking. Send a pre-filled WhatsApp message for the treatment you want, call the spa, or consult the <Link to="/en/pricing" className="text-gold-700 underline underline-offset-4">pricing menu</Link>. You can also view the current <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-gold-700 underline underline-offset-4">Google reviews</a> directly.</p></div>
        </div>
      </section>
    </main>
  </>;
}
