import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import FaqSection from '../components/FaqSection';
import { SITE } from '../config/site';
import { Link } from 'react-router-dom';

export default function SpaRabatPage() {
  const spaRabatFaqs = [
    {
      question: "Où se trouve le meilleur spa à Rabat ?",
      answer: (
        <>
          BE CUTE SPA est idéalement situé au cœur du quartier dynamique d'Agdal à Rabat. Notre établissement offre un véritable havre de paix, facilement accessible pour les résidents et les visiteurs à la recherche d'une évasion sensorielle. <Link to="/contact" className="text-gold-700 hover:text-gold-800 underline decoration-gold-700/30 underline-offset-4 transition-colors">Découvrez notre emplacement exact et notre itinéraire.</Link>
        </>
      )
    },
    {
      question: "Quels services propose un spa à Rabat comme Be Cute Spa ?",
      answer: <>Notre carte réunit trois rituels de hammam marocain, des massages relaxant, suédois et dos & nuque, ainsi que des formules associant hammam et massage. <Link to="/services" className="text-gold-700 hover:text-gold-800 underline decoration-gold-700/30 underline-offset-4 transition-colors">Consultez les inclusions, durées et tarifs de chaque soin.</Link></>
    },
    {
      question: "Comment réserver un spa à Rabat Agdal ?",
      answer: (
        <>
          La réservation chez BE CUTE SPA est simple et rapide. Vous pouvez nous contacter directement via WhatsApp ou par téléphone pour choisir la date et le soin qui vous conviennent, ou pour obtenir des conseils personnalisés de notre équipe. <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gold-700 hover:text-gold-800 underline decoration-gold-700/30 underline-offset-4 transition-colors">Réservez dès maintenant votre moment de détente.</a>
        </>
      )
    }
  ];

  return (
    <>
      <Seo 
        title="Spa à Rabat | Hammam & Massages d'exception | BE CUTE SPA"
        description="Découvrez BE CUTE SPA, votre espace de bien-être à Rabat Agdal. Profitez de nos rituels de hammam traditionnel et de nos massages relaxants sur-mesure."
        canonicalPath="/spa-rabat"
        alternatePaths={[{ lang: 'en', path: '/en/spa-rabat' }]}
      />
      <main className="bg-ivory-50">
        <PageHero title="Spa à Rabat" />
        
        <section className="section-padding bg-cream-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-ink/80 font-light leading-relaxed space-y-12">
            <div>
              <h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">
                L'évasion bien-être au cœur de Rabat
              </h2>
              <p className="mb-4">
                À Agdal, Rue Aguelmane Sidi Ali, BE CUTE SPA propose une pause bien-être ancrée dans le rituel marocain du hammam. Ici, la carte rassemble des soins clairement détaillés pour choisir son moment de détente à Rabat.
              </p>
              <p className="mb-4">
                Savon noir, tebrima, gommage, ghassoul et fleur d'oranger composent les rituels selon la formule choisie. Pour compléter la vapeur du hammam, nos massages invitent à ralentir, de 45 à 60 minutes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">
                Nos Rituels Hammam & Massage
              </h2>
              <p className="mb-4">
                La carte est volontairement précise afin que chaque client sache ce qui est inclus avant de réserver :
              </p>
              <ul className="list-disc pl-5 space-y-3 mb-6">
                <li><strong>Hammam Traditionnel :</strong> set de bain, savon noir, tebrima, gommage à la fleur d'oranger, shampoing et savonnage.</li>
                <li><strong>Hammam Royale et Sultan :</strong> des rituels enrichis d'enveloppements, de ghassoul ou d'un massage de 30 minutes selon la formule.</li>
                <li><strong>Massages :</strong> relaxant, suédois ou dos & nuque, proposés seuls ; les formules Signature associent hammam et massage.</li>
              </ul>
              <p className="mb-4">
                Retrouvez les prix, les durées et les inclusions de chaque rituel dans notre <Link to="/tarifs" className="text-gold-700 hover:text-gold-800 underline decoration-gold-700/30 underline-offset-4 transition-colors">menu des tarifs spa à Rabat</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl text-gold-700 mb-6 font-extralight tracking-widest uppercase">
                Pourquoi choisir notre Spa ?
              </h2>
              <p className="mb-4">
                BE CUTE SPA facilite le choix et la réservation : prix affichés, contenu de chaque soin, réservation par WhatsApp avec message prérempli ou par téléphone. Consultez également les <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-gold-700 hover:text-gold-800 underline decoration-gold-700/30 underline-offset-4 transition-colors">avis Google</a> pour une information directement vérifiable.
              </p>
              <div className="mt-8 text-center">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-8 py-3"
                >
                  Réserver votre séance de spa
                </a>
              </div>
            </div>
          </div>
        </section>

        <FaqSection faqs={spaRabatFaqs} title="Questions fréquentes — Spa Rabat" />
      </main>
    </>
  );
}
