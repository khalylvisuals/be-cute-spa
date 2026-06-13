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
    <section id="galerie" className="section-padding bg-dark-burgundy">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-luxury text-gold/80">
            Galerie
          </p>

          <h2 className="luxury-heading text-4xl font-extralight uppercase tracking-[0.2em] text-ivory sm:text-5xl lg:text-6xl">
            L’atmosphère BE CUTE SPA
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
            Un aperçu de notre univers bien-être : accueil, hammam, massage,
            rituels de détente et moments de relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* Large image */}
          <div className="group relative overflow-hidden border border-gold/20 bg-deep-wine lg:min-h-[660px]">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[560px] lg:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/68 via-deep-wine/5 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="mb-3 block text-[11px] font-light uppercase tracking-[0.24em] text-gold">
                01 / {galleryImages[0].label}
              </span>

              <h3 className="max-w-md text-2xl font-light uppercase tracking-[0.14em] text-ivory sm:text-3xl">
                {galleryImages[0].title}
              </h3>
            </div>
          </div>

          {/* Small images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={image.src}
                className="group relative overflow-hidden border border-gold/20 bg-deep-wine"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64 lg:h-[318px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/55 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-light uppercase tracking-[0.22em] text-gold/90">
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
