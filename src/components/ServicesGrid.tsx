import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import Image from './Image';

const services = [
  {
    number: '01',
    category: 'Hammam',
    title: 'Hammam Traditionnel',
    description:
      "Set de bain, savon noir et tebrima, gommage à la fleur d’oranger, shampoing et savonnage.",
    duration: 'Rituel hammam',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-traditionnel.png`,
  },
  {
    number: '02',
    category: 'Hammam',
    title: 'Hammam Royale',
    description:
      "Set de bain, savon noir et tebrima, enveloppement détox au café et fleur d’oranger, masque visage exfoliant et hydratant, shampoing et savonnage.",
    duration: 'Rituel hammam premium',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-royale.png`,
  },
  {
    number: '03',
    category: 'Hammam',
    title: 'Hammam Sultan',
    description:
      "Set de bain, savon noir et tebrima, enveloppement au chocolat et fleur d’oranger, gommage, ghassoul aux fleurs d’oranger, masque visage, shampoing, ½ heure de massage et savonnage.",
    duration: 'Avec ½ heure de massage',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-sultan.png`,
  },
  {
    number: '04',
    category: 'Massage',
    title: 'Massage Relaxant',
    description:
      'Un massage doux et apaisant pour relâcher les tensions, calmer le corps et retrouver une sensation de détente profonde.',
    duration: '45 min ou 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-relaxant.png`,
  },
  {
    number: '05',
    category: 'Massage',
    title: 'Massage Suédois',
    description:
      'Un massage tonique et relaxant à la fois, idéal pour détendre les muscles et améliorer la sensation de bien-être.',
    duration: '45 min ou 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-suedois.png`,
  },
  {
    number: '06',
    category: 'Massage',
    title: 'Massage Dos & Nuque',
    description:
      'Un soin ciblé pour soulager les tensions du dos, de la nuque et des épaules.',
    duration: '45 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-dos-nuque.png`,
  },
];

function createWhatsAppLink(serviceTitle: string) {
  const message = `Bonjour BE CUTE SPA, je souhaite avoir plus d’informations sur le service : ${serviceTitle}.`;
  return `https://wa.me/212666948022?text=${encodeURIComponent(message)}`;
}

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          kicker="Expériences Signature"
          title="Nos soins"
          subtitle="Découvrez nos hammams, massages et soins pensés pour vous offrir une parenthèse de détente dans une atmosphère calme et raffinée."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col relative overflow-hidden border border-sand-300/15 bg-ivory-50 transition-all duration-500 hover:-translate-y-1 hover:border-sand-300/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                <div className="absolute inset-0 bg-gradient-to-t from-ivory-50/45 via-ivory-50/5 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-sand-300/25 bg-ivory-50/65 px-4 py-2 text-[10px] font-medium uppercase tracking-wide-plus text-gold-700 backdrop-blur-md">
                  {service.category}
                </div>
              </div>

              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold tracking-[0.05em] text-gold-500/10 z-0 pointer-events-none">
                {service.number}
              </div>

              <div className="flex flex-col flex-grow p-6 sm:p-7 lg:p-8 relative z-10">
                <h3 className="mb-4 text-xl font-medium uppercase tracking-wide-plus text-ink">
                  {service.title}
                </h3>

                <p className="mb-6 text-body font-light leading-relaxed text-ink/75">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="mb-6 border border-sand-300/20 bg-cream-100/45 p-5 rounded-ui">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-medium uppercase tracking-wide-plus text-ink/75">
                        Type
                      </span>

                      <span className="text-right text-xs font-medium uppercase tracking-wide-plus text-ink">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={createWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 px-4 min-h-[40px] text-[10px]"
                    >
                      Réserver
                    </a>

                    <Link
                      to="/tarifs"
                      className="btn-tertiary group/link"
                    >
                      Voir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
