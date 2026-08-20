import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import Image from '../Image';

const services = [
  {
    number: '01',
    category: 'Hammam',
    title: 'Traditional Hammam',
    description:
      "Bath set, black soap and tebrima, orange blossom scrub, shampoo and soaping.",
    duration: 'Hammam ritual',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-traditionnel.png`,
  },
  {
    number: '02',
    category: 'Hammam',
    title: 'Royal Hammam',
    description:
      "Bath set, black soap and tebrima, coffee and orange blossom detox wrap, exfoliating and hydrating face mask, shampoo and soaping.",
    duration: 'Premium hammam ritual',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-royale.png`,
  },
  {
    number: '03',
    category: 'Hammam',
    title: 'Sultan Hammam',
    description:
      "Bath set, black soap and tebrima, chocolate and orange blossom wrap, scrub, orange blossom ghassoul, face mask, shampoo, ½ hour massage and soaping.",
    duration: 'With ½ hour massage',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-sultan.png`,
  },
  {
    number: '04',
    category: 'Massage',
    title: 'Relaxing Massage',
    description:
      'A soft and soothing massage to release tension, calm the body, and rediscover a deep sense of relaxation.',
    duration: '45 min or 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-relaxant.png`,
  },
  {
    number: '05',
    category: 'Massage',
    title: 'Swedish Massage',
    description:
      'An invigorating and relaxing massage, ideal for relaxing muscles and improving the sense of well-being.',
    duration: '45 min or 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-suedois.png`,
  },
  {
    number: '06',
    category: 'Massage',
    title: 'Back & Neck Massage',
    description:
      'A targeted treatment to relieve tension in the back, neck, and shoulders.',
    duration: '45 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-dos-nuque.png`,
  },
];

function createWhatsAppLink(serviceTitle: string) {
  const message = `Hello BE CUTE SPA, I would like more information about the service: ${serviceTitle}.`;
  return `https://wa.me/212666948022?text=${encodeURIComponent(message)}`;
}

export default function ServicesGridEn() {
  return (
    <section id="services" className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          kicker="Signature Experiences"
          title="Our treatments"
          subtitle="Discover our hammams, massages and treatments designed to offer you a relaxing break in a calm and refined atmosphere."
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
                      Book
                    </a>

                    <Link
                      to="/en/pricing"
                      className="btn-tertiary group/link"
                    >
                      See more
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
