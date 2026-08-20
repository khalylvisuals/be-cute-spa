import SectionHeader from './SectionHeader';
import Image from './Image';
const galleryImages = [
  {
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`,
    alt: 'Réception BE CUTE SPA avec ambiance burgundy, dorée et raffinée',
    label: 'Réception',
    title: 'Un accueil élégant et apaisant',
  },
  {
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-hammam-atmosphere.png`,
    alt: 'Hammam marocain avec vapeur, bougies et lumière dorée',
    label: 'Hammam',
  },
  {
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-massage-room.png`,
    alt: 'Salle de massage premium avec serviettes, bougies et tons burgundy',
    label: 'Massage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-ritual-details.png`,
    alt: 'Détails de rituel spa avec savon noir, huiles, fleurs et accessoires dorés',
    label: 'Rituel',
  },
  {
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-relaxation-tea.png`,
    alt: 'Espace relaxation avec thé marocain, lumière chaude et ambiance spa',
    label: 'Détente',
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          kicker="Galerie"
          title="L’atmosphère BE CUTE SPA"
          subtitle="Un aperçu de notre univers bien-être : accueil, hammam, massage, rituels de détente et moments de relaxation."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* Large image */}
          <div className="group relative overflow-hidden border border-sand-300/20 bg-ivory-50 lg:min-h-[660px] aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto rounded-ui">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-maroon-900/60 to-transparent/0" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="mb-3 block text-[11px] font-medium uppercase tracking-wide-plus text-gold-500">
                01 / {galleryImages[0].label}
              </span>

              <h3 className="max-w-md text-2xl font-light uppercase tracking-wide-plus text-ivory-50 sm:text-3xl text-balance">
                {galleryImages[0].title}
              </h3>
            </div>
          </div>

          {/* Small images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={image.src}
                className="group relative overflow-hidden border border-sand-300/20 bg-ivory-50 aspect-square rounded-ui"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-maroon-900/60 to-transparent/0" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-medium uppercase tracking-wide-plus text-gold-700">
                    {String(index + 2).padStart(2, '0')} / {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
