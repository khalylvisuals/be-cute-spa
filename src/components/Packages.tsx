const packages = [
  {
    number: '01',
    title: 'Hammam Traditionnel + Massage',
    description: 'Hammam traditionnel avec massage au choix pour une pause complète de détente.',
    duration: '90 min',
    price: '500 DH',
  },
  {
    number: '02',
    title: 'Hammam Royale + Massage',
    description: 'Hammam royale avec massage au choix pour une expérience bien-être plus complète.',
    duration: '90 min',
    price: '600 DH',
  },
];

function createWhatsAppLink(packageTitle: string) {
  const message = `Bonjour BE CUTE SPA, je souhaite avoir plus d'informations sur le package : ${packageTitle}.`;
  return `https://wa.me/212666948022?text=${encodeURIComponent(message)}`;
}

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-deep-wine">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-luxury text-gold/80">
            Nos packs
          </p>

          <h2 className="luxury-heading mb-5 text-4xl font-extralight uppercase tracking-[0.22em] text-ivory sm:text-5xl lg:text-6xl">
            Packages bien-être
          </h2>

          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
            Combinez hammam et massage pour une expérience complète, pensée pour
            détendre le corps et apaiser l’esprit.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.number}
              className="group relative overflow-hidden border border-gold/20 bg-dark-burgundy/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition-colors duration-500 group-hover:bg-gold/10" />

              {/* Number */}
              <span className="pointer-events-none absolute right-6 top-5 select-none text-6xl font-extralight leading-none tracking-[0.04em] text-gold/30 sm:text-7xl">
                {pkg.number}
              </span>

              <div className="relative z-10">
                <p className="mb-4 text-[11px] font-light uppercase tracking-[0.24em] text-gold/75">
                  Package
                </p>

                <h3 className="mb-5 max-w-[80%] text-xl font-light uppercase tracking-[0.14em] text-ivory sm:text-2xl">
                  {pkg.title}
                </h3>

                <p className="mb-7 min-h-[72px] text-sm font-light leading-relaxed text-ivory/62 sm:text-base">
                  {pkg.description}
                </p>

                <div className="mb-7 space-y-3 border-y border-gold/15 py-5">
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-xs font-light uppercase tracking-[0.18em] text-ivory/45">
                      Durée
                    </span>
                    <span className="text-sm font-light uppercase tracking-[0.14em] text-ivory">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-5">
                    <span className="text-xs font-light uppercase tracking-[0.18em] text-ivory/45">
                      Tarif
                    </span>
                    <span className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-gold px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-dark-text"
                >
                  Réserver ce package
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}