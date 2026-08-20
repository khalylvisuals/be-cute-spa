import Seo from '../../components/Seo';
import ContactHeroEn from '../../components/en/ContactHeroEn';
import ContactEn from '../../components/en/ContactEn';
import { generateFAQJsonLd } from '../../utils/jsonLd';

export default function ContactPageEn() {
  const contactFaqs = [
    { question: "How to book?", answer: "Booking is done primarily via WhatsApp or by phone. This allows us to advise you on the most suitable treatment and check real-time availability." },
    { question: "Can I book via WhatsApp?", answer: "Absolutely. It's actually the booking method we recommend for a quick and personalized response." },
    { question: "What are your opening hours?", answer: "We are open every day from 10:00 AM to 11:00 PM, allowing you to enjoy a moment of relaxation even at the end of the day." },
    { question: "Where is BE CUTE SPA located?", answer: "BE CUTE SPA is located in the heart of Rabat Agdal, Rue Aguelmane Sidi Ali (above the Be Cute hair salon)." },
    { question: "How can I check the prices?", answer: "You can view all our services and prices directly on our Pricing page." }
  ];

  return (
    <>
      <Seo 
        lang="en"
        title="Contact & Booking | Spa Rabat Agdal | BE CUTE SPA"
        description="Contact BE CUTE SPA in Rabat Agdal to book your hammam or massage. Phone: 05 37 68 24 27, WhatsApp: 06 66 94 80 22. Open 7 days a week."
        canonicalPath="/en/contact"
        alternatePaths={[{ lang: 'fr', path: '/contact' }]}
        jsonLd={[generateFAQJsonLd(contactFaqs)]}
      />
      <main>
        <ContactHeroEn />
        <ContactEn />
      </main>
    </>
  );
}