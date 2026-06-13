import { Check } from 'lucide-react';

const features = [
  'Ambiance calme & raffinée',
  'Hammam traditionnel marocain',
  'Massages pour femmes & hommes',
  'Réservation simple par téléphone ou WhatsApp',
  'Menus & tarifs disponibles',
];

export default function AboutExperience() {
  return (
    <section id="apropos" className="section-padding bg-dark-burgundy">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 bg-deep-wine">
              <img
                src={`${import.meta.env.BASE_URL}images/about-spa-ambience.png`}
                alt="Ambiance raffinée BE CUTE SPA avec massage, bougies et tons burgundy"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/65 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-burgundy/18 mix-blend-multiply" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="mb-3 text-[11px] font-light uppercase tracking-[0.24em] text-gold">
                  Rabat • BE CUTE SPA
                </p>

                <p className="max-w-sm text-xl font-light uppercase tracking-[0.14em] text-ivory sm:text-2xl">
                  Une parenthèse calme et raffinée
                </p>
              </div>
            </div>

            {/* Decorative borders */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 border border-gold/25 sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32" />
            <div className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 border border-gold/25 sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="mb-4 text-xs font-light uppercase tracking-luxury text-gold/80">
              L’expérience BE CUTE SPA
            </p>

            <h2 className="luxury-heading mb-6 text-4xl font-extralight uppercase leading-tight tracking-[0.18em] text-ivory sm:text-5xl lg:text-6xl">
              Un espace pensé
              <br />
              pour votre détente
            </h2>

            <div className="mb-7 h-px w-16 bg-gold" />

            <p className="mb-8 max-w-xl text-sm font-light leading-relaxed text-ivory/68 sm:text-base">
              Situé à Rabat, BE CUTE SPA est un espace de bien-être où chaque
              détail est pensé pour vous offrir une pause calme, élégante et
              apaisante. Entre hammam marocain traditionnel, massages relaxants
              et rituels bien-être, notre univers vous invite à ralentir,
              respirer et prendre soin de vous.
            </p>

            {/* Features list */}
            <ul className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40">
                    <Check className="h-3 w-3 text-gold" />
                  </div>

                  <span className="text-sm font-light leading-relaxed text-ivory/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/212666948022"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-filled inline-flex"
            >
              Réserver votre moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
