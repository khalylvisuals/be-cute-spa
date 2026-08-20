import Seo from '../components/Seo';
import ContactHero from '../components/ContactHero';
import Contact from '../components/Contact';
import { generateFAQJsonLd } from '../utils/jsonLd';

export default function ContactPage() {
  const contactFaqs = [
    { question: "Comment réserver ?", answer: "La réservation se fait principalement par WhatsApp ou par téléphone. Cela nous permet de vous conseiller sur le soin le plus adapté et de vérifier les disponibilités en temps réel." },
    { question: "Peut-on réserver par WhatsApp ?", answer: "Absolument. C'est même le moyen de réservation que nous recommandons pour une réponse rapide et personnalisée." },
    { question: "Quels sont vos horaires ?", answer: "Nous sommes ouverts tous les jours de 10:00 à 23:00, pour vous permettre de profiter d'un moment de détente même en fin de journée." },
    { question: "Où se trouve BE CUTE SPA ?", answer: "BE CUTE SPA se trouve au cœur de Rabat Agdal, Rue Aguelmane Sidi Ali (au-dessus du salon de coiffure Be Cute)." },
    { question: "Comment consulter les tarifs ?", answer: "Vous pouvez consulter l'ensemble de nos prestations et prix directement sur notre page Tarifs." }
  ];

  return (
    <>
      <Seo 
        title="Contact & Réservation | Spa Rabat Agdal | BE CUTE SPA"
        description="Contactez BE CUTE SPA à Rabat Agdal pour réserver votre hammam ou massage. Téléphone : 05 37 68 24 27, WhatsApp : 06 66 94 80 22. Ouvert 7j/7."
        canonicalPath="/contact"
        alternatePaths={[{ lang: 'en', path: '/en/contact' }]}
        jsonLd={[generateFAQJsonLd(contactFaqs)]}
      />
      <main>
        <ContactHero />
        <Contact />
      </main>
    </>
  );
}