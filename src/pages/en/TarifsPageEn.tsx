import Seo from '../../components/Seo';
import TarifsHeroEn from '../../components/en/TarifsHeroEn';
import TarifsMenuEn from '../../components/en/TarifsMenuEn';
import FaqSection from '../../components/FaqSection';
import Image from '../../components/Image';
import { generateOfferCatalogJsonLd, generateFAQJsonLd } from '../../utils/jsonLd';

const tarifsFaqs = [
  {
    question: "Are all mentioned items included in the price?",
    answer: "Yes, the prices displayed for each hammam ritual or package include all the treatments mentioned (black soap, scrub, wrap, etc.). No additional fee is required to enjoy the described experience."
  },
  {
    question: "How long do the treatments last?",
    answer: "The duration varies depending on the chosen service. Our massages are available in 45 minutes or 60 minutes. Hammam rituals last on average between 45 minutes and 1h30 depending on the formula. Complete packages (hammam + massage) have a duration of 90 minutes."
  },
  {
    question: "Can I book a massage only?",
    answer: "Absolutely. You can book a relaxing, Swedish, or back & neck massage independently of our hammam rituals."
  },
  {
    question: "Can I combine a hammam and a massage?",
    answer: "Yes, it is even recommended for absolute relaxation. We offer 'Signature Experiences' packages (from 500 DH) that combine our hammam rituals with the massage of your choice for a duration of 90 minutes."
  },
  {
    question: "How do I book?",
    answer: "Booking is very simple via WhatsApp or by phone. You can use the booking buttons on our treatment menu to send us a pre-filled message with the treatment of your choice."
  }
];

export default function TarifsPageEn() {
  return (
    <>
      <Seo 
        lang="en"
        title="Spa & Hammam Prices Rabat | Massage Prices | BE CUTE SPA"
        description="All prices for our spa in Rabat Agdal: hammam from 300 to 500 DH, massage 45 min 300 DH / 60 min 400 DH, hammam + massage packages from 500 DH. Easy booking."
        canonicalPath="/en/pricing"
        alternatePaths={[{ lang: 'fr', path: '/tarifs' }]}
        jsonLd={[generateOfferCatalogJsonLd(), generateFAQJsonLd(tarifsFaqs)]}
      />

      <main className="bg-ivory-50">
        <TarifsHeroEn />
        
        <TarifsMenuEn />

        {/* Premium Experience Section */}
        <section className="py-20 bg-ink text-ivory-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl mb-6 text-balance">More than a treatment, an experience</h2>
                <div className="space-y-4 text-ivory-100/80 font-light leading-relaxed">
                  <p>
                    At BE CUTE SPA, we have considered every detail to offer you a moment of true disconnection.
                  </p>
                  <p>
                    Our treatments combine the authenticity of Moroccan hammam traditions with the requirement of professional service. In a refined environment, where attention to comfort is paramount, we invite you to slow down and take care of yourself.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
                <Image 
                  src={`${import.meta.env.BASE_URL}images/gallery-spa-luxury.png`}
                  alt="Relaxing atmosphere BE CUTE SPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="py-12 bg-cream-100">
          <FaqSection 
            title="Frequently asked questions about our prices" 
            faqs={tarifsFaqs} 
          />
        </div>
      </main>
    </>
  );
}
