import { Check } from 'lucide-react';
import Image from './Image';

const features = [
  'Hammam marocain traditionnel',
  'Massages de différentes durées',
  'Formules hammam & massage',
  'Accueil femmes & hommes',
  'Réservation par téléphone ou WhatsApp',
  'Situé à Rabat Agdal',
];

export default function AboutExperience({ service = 'Spa', location = 'Rabat' }: { service?: string, location?: string }) {
  return (
    <section id="apropos" className="section-padding bg-ivory-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden border border-sand-300/20 bg-cream-100">
              <Image
                src={`${import.meta.env.BASE_URL}images/about-spa-ambience.png`}
                alt={`Ambiance raffinée ${service} à ${location} avec massage, bougies et tons burgundy`}
                className="h-full w-full object-cover"
                width={960}
                height={1200}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cream-100/65 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-ivory-50/18 mix-blend-multiply" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="mb-3 text-[11px] font-light uppercase tracking-[0.24em] text-gold-700">
                  {location} • BE CUTE SPA
                </p>

                <p className="max-w-sm text-xl font-light uppercase tracking-[0.14em] text-ink sm:text-2xl">
                  Une parenthèse calme et raffinée
                </p>
              </div>
            </div>

            {/* Decorative borders */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-28 w-28 border border-sand-300/25 sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32" />
            <div className="pointer-events-none absolute -left-3 -top-3 h-28 w-28 border border-sand-300/25 sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-wide-plus text-gold-700">
              L’expérience BE CUTE SPA {location}
            </p>

            <h2 className="section-heading text-ink mb-6">
              Une expérience bien-être au cœur de Rabat Agdal
            </h2>

            <div className="mb-7 h-px w-16 bg-gold-500" />

            <div className="mb-8 max-w-xl space-y-4 text-sm font-light leading-relaxed text-ink/68 sm:text-base">
              <p>
                BE CUTE SPA vous accueille à Rabat Agdal pour vous offrir une véritable parenthèse de détente. Notre approche associe l'authenticité du hammam marocain traditionnel à différentes expériences de massage et de bien-être.
              </p>
              <p>
                Que vous souhaitiez profiter d'un rituel hammam, vous accorder un massage ou choisir une formule combinant plusieurs prestations, vous pouvez composer votre expérience selon vos envies et votre temps disponible.
              </p>
              <p>
                Notre équipe vous accueille dans un environnement pensé pour vous permettre de ralentir, prendre soin de vous et profiter pleinement de votre moment au spa.
              </p>
            </div>

            {/* Features list */}
            <ul className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sand-300/40">
                    <Check className="h-3 w-3 text-gold-700" />
                  </div>

                  <span className="text-sm font-light leading-relaxed text-ink/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/212666948022"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Réserver votre moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
