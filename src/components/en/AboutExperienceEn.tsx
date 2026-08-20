import { Check } from 'lucide-react';
import Image from '../Image';

const features = [
  'Traditional Moroccan hammam',
  'Massages of various durations',
  'Hammam & massage packages',
  'Welcoming women & men',
  'Booking by phone or WhatsApp',
  'Located in Rabat Agdal',
];

export default function AboutExperienceEn({ service = 'Spa', location = 'Rabat' }: { service?: string, location?: string }) {
  return (
    <section id="about" className="section-padding bg-ivory-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden border border-sand-300/20 bg-cream-100">
              <Image
                src={`${import.meta.env.BASE_URL}images/about-spa-ambience.png`}
                alt={`Refined ${service} atmosphere in ${location} with massage, candles and burgundy tones`}
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
                  A calm and refined break
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
              The BE CUTE SPA {location} Experience
            </p>

            <h2 className="section-heading text-ink mb-6">
              A wellness experience in the heart of Rabat Agdal
            </h2>

            <div className="mb-7 h-px w-16 bg-gold-500" />

            <div className="mb-8 max-w-xl space-y-4 text-sm font-light leading-relaxed text-ink/68 sm:text-base">
              <p>
                BE CUTE SPA welcomes you to Rabat Agdal to offer you a true relaxing break. Our approach combines the authenticity of the traditional Moroccan hammam with various massage and wellness experiences.
              </p>
              <p>
                Whether you wish to enjoy a hammam ritual, treat yourself to a massage, or choose a package combining several services, you can tailor your experience according to your desires and available time.
              </p>
              <p>
                Our team welcomes you in an environment designed to allow you to slow down, take care of yourself, and fully enjoy your moment at the spa.
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
              Book your moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
