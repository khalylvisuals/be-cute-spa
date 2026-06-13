import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    category: 'Hammam',
    title: 'Hammam Traditionnel',
    description:
      "Set de bain, savon noir et tebrima, gommage à la fleur d’oranger, shampoing et savonnage.",
    price: '300 DH',
    duration: 'Rituel hammam',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-traditionnel.png`,
  },
  {
    number: '02',
    category: 'Hammam',
    title: 'Hammam Royale',
    description:
      "Set de bain, savon noir et tebrima, enveloppement détox au café et fleur d’oranger, masque visage exfoliant et hydratant, shampoing et savonnage.",
    price: '400 DH',
    duration: 'Rituel hammam premium',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-royale.png`,
  },
  {
    number: '03',
    category: 'Hammam',
    title: 'Hammam Sultan',
    description:
      "Set de bain, savon noir et tebrima, enveloppement au chocolat et fleur d’oranger, gommage, ghassoul aux fleurs d’oranger, masque visage, shampoing, ½ heure de massage et savonnage.",
    price: '500 DH',
    duration: 'Avec ½ heure de massage',
    image: `${import.meta.env.BASE_URL}images/services/service-hammam-sultan.png`,
  },
  {
    number: '04',
    category: 'Massage',
    title: 'Massage Relaxant',
    description:
      'Un massage doux et apaisant pour relâcher les tensions, calmer le corps et retrouver une sensation de détente profonde.',
    price: '45 min · 300 DH',
    secondPrice: '60 min · 400 DH',
    duration: '45 min ou 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-relaxant.png`,
  },
  {
    number: '05',
    category: 'Massage',
    title: 'Massage Suédois',
    description:
      'Un massage tonique et relaxant à la fois, idéal pour détendre les muscles et améliorer la sensation de bien-être.',
    price: '45 min · 300 DH',
    secondPrice: '60 min · 400 DH',
    duration: '45 min ou 60 min',
    image: `${import.meta.env.BASE_URL}images/services/service-massage-suedois.png`,
  },
  {
    number: '06',
    category: 'Massage',
    title: 'Massage Dos & Nuque',
    description:
      'Un soin ciblé pour soulager les tensions du dos, de la nuque et des épaules.',
    price: '45 min · 300 DH',
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
    <section id="services" className="section-padding bg-deep-wine">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-luxury text-gold/80">
            Expériences Signature
          </p>

          <h2 className="luxury-heading text-4xl font-extralight uppercase tracking-[0.22em] text-ivory sm:text-5xl lg:text-6xl">
            Nos soins
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
            Découvrez nos hammams, massages et soins pensés pour vous offrir une
            parenthèse de détente dans une atmosphère calme et raffinée.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden border border-gold/15 bg-dark-burgundy transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-burgundy/45 via-dark-burgundy/5 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-gold/25 bg-dark-burgundy/65 px-4 py-2 text-[10px] font-light uppercase tracking-[0.22em] text-gold backdrop-blur-md">
                  {service.category}
                </div>

                <div className="absolute bottom-5 right-5 text-5xl font-extralight tracking-[0.05em] text-gold/45">
                  {service.number}
                </div>
              </div>

              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="mb-4 text-xl font-light uppercase tracking-[0.16em] text-ivory">
                  {service.title}
                </h3>

                <p className="mb-6 min-h-[96px] text-sm font-light leading-relaxed text-ivory/62">
                  {service.description}
                </p>

                <div className="mb-6 border border-gold/20 bg-deep-wine/45 p-5">
                  <div className="mb-4 flex items-center justify-between gap-4 border-b border-gold/10 pb-4">
                    <span className="text-[10px] font-light uppercase tracking-[0.22em] text-ivory/45">
                      Durée
                    </span>

                    <span className="text-right text-xs font-light uppercase tracking-[0.12em] text-ivory/75">
                      {service.duration}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-light uppercase tracking-[0.22em] text-ivory/45">
                      Tarif
                    </span>

                    <div className="text-right">
                      <p className="text-lg font-medium uppercase tracking-[0.14em] text-gold">
                        {service.price}
                      </p>

                      {service.secondPrice && (
                        <p className="mt-2 text-sm font-light uppercase tracking-[0.12em] text-gold/80">
                          {service.secondPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={createWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gold bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-deep-wine transition-all duration-300 hover:bg-soft-gold"
                  >
                    Réserver
                  </a>

                  <a
                    href={createWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-[11px] font-light uppercase tracking-[0.18em] text-gold transition-colors hover:text-soft-gold group/link"
                  >
                    Voir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
