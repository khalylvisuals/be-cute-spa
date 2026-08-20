import Seo from '../components/Seo';
import TarifsHero from '../components/TarifsHero';
import TarifsMenu from '../components/TarifsMenu';
import FaqSection from '../components/FaqSection';
import Image from '../components/Image';
import { generateOfferCatalogJsonLd, generateFAQJsonLd } from '../utils/jsonLd';

const tarifsFaqs = [
  {
    question: "Les prix comprennent-ils tous les éléments indiqués ?",
    answer: "Oui, les tarifs affichés pour chaque rituel hammam ou forfait comprennent l'intégralité des soins mentionnés (savon noir, gommage, enveloppement, etc.). Aucun supplément n'est requis pour profiter de l'expérience décrite."
  },
  {
    question: "Quelle est la durée des soins ?",
    answer: "La durée varie selon la prestation choisie. Nos massages sont disponibles en 45 minutes ou 60 minutes. Les rituels hammam durent en moyenne entre 45 minutes et 1h30 selon la formule. Les forfaits complets (hammam + massage) ont une durée de 90 minutes."
  },
  {
    question: "Peut-on réserver un massage seul ?",
    answer: "Absolument. Vous pouvez réserver un massage relaxant, suédois ou dos & nuque indépendamment de nos rituels hammam."
  },
  {
    question: "Peut-on combiner hammam et massage ?",
    answer: "Oui, c'est même recommandé pour une détente absolue. Nous proposons des forfaits 'Expériences Signature' (à partir de 500 DH) qui combinent nos rituels hammam avec le massage de votre choix pour une durée de 90 minutes."
  },
  {
    question: "Comment réserver ?",
    answer: "La réservation s'effectue très simplement par WhatsApp ou par téléphone. Vous pouvez utiliser les boutons de réservation présents sur notre carte des soins pour nous envoyer un message pré-rempli avec le soin de votre choix."
  }
];

export default function TarifsPage() {
  return (
    <>
      <Seo 
        title="Tarifs Spa & Hammam Rabat | Prix Massages | BE CUTE SPA"
        description="Tous les prix de notre spa à Rabat Agdal : hammam de 300 à 500 DH, massage 45 min 300 DH / 60 min 400 DH, packs hammam + massage dès 500 DH. Réservation facile."
        canonicalPath="/tarifs"
        alternatePaths={[{ lang: 'en', path: '/en/pricing' }]}
        jsonLd={[generateOfferCatalogJsonLd(), generateFAQJsonLd(tarifsFaqs)]}
      />

      <main className="bg-ivory-50">
        <TarifsHero />
        
        <TarifsMenu />

        {/* Premium Experience Section */}
        <section className="py-20 bg-ink text-ivory-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl mb-6 text-balance">Plus qu'un soin, une expérience</h2>
                <div className="space-y-4 text-ivory-100/80 font-light leading-relaxed">
                  <p>
                    Chez BE CUTE SPA, nous avons pensé chaque détail pour vous offrir un moment de véritable déconnexion.
                  </p>
                  <p>
                    Nos soins associent l'authenticité des traditions marocaines du hammam à l'exigence d'un service professionnel. Dans un environnement raffiné, où l'attention portée au confort est primordiale, nous vous invitons à ralentir et à prendre soin de vous.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
                <Image 
                  src={`${import.meta.env.BASE_URL}images/gallery-spa-luxury.png`}
                  alt="Ambiance relaxante BE CUTE SPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="py-12 bg-cream-100">
          <FaqSection 
            title="Questions fréquentes sur nos tarifs" 
            faqs={tarifsFaqs} 
          />
        </div>
      </main>
    </>
  );
}
