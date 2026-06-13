import { ArrowDown } from 'lucide-react';

const floatingTags = [
  'Hammam marocain',
  'Massages relaxants',
  'Pour elle & lui',
  'Rituel bien-être',
];

const heroImage = `${import.meta.env.BASE_URL}images/hero-spa-ritual.png`;

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-deep-wine"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,106,0.10),transparent_28%),linear-gradient(135deg,#250202_0%,#120606_55%,#050202_100%)]" />

      {/* Hero image - desktop */}
      <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <img
          src={heroImage}
          alt="Rituel spa BE CUTE SPA avec ambiance burgundy, bougies et détails premium"
          className="h-full w-full object-cover object-center"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-wine via-deep-wine/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-wine/80 via-transparent to-deep-wine/35" />
        <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply" />
      </div>

      {/* Hero image - mobile/tablet */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt="Rituel spa BE CUTE SPA avec ambiance burgundy, bougies et détails premium"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-deep-wine/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/70 via-deep-wine/82 to-deep-wine" />
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-[-8rem] top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-96 w-96 rounded-full bg-burgundy/35 blur-3xl" />

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-0 lg:pt-24">
        <div className="grid min-h-[calc(100svh-8rem)] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-6 inline-block text-[11px] font-light uppercase tracking-[0.32em] text-gold/85 sm:text-xs">
              Rabat • Wellness & Beauty Lounge
            </p>

            <h1 className="luxury-heading mb-7 text-5xl font-extralight uppercase leading-[0.95] tracking-[0.16em] text-ivory sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              Reveal
              <br />
              Your
              <br />
              Inner
              <br />
              <span className="text-gold">Calm</span>
            </h1>

            <div className="mx-auto mb-7 h-px w-16 bg-gold lg:mx-0" />

            <p className="mx-auto mb-9 max-w-xl text-base font-light leading-relaxed text-ivory/72 sm:text-lg lg:mx-0">
              BE CUTE SPA vous accueille à Rabat pour une expérience bien-être
              raffinée : hammam marocain traditionnel, massages relaxants et
              rituels de détente dans une atmosphère calme et élégante.
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://wa.me/212666948022"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-filled w-full sm:w-auto"
              >
                Réserver maintenant
              </a>

              <a href="#services" className="btn-gold w-full sm:w-auto">
                Découvrir nos soins
              </a>
            </div>

            <p className="text-sm font-light tracking-[0.08em] text-ivory/60">
              Réservation :{' '}
              <a
                href="tel:0537682427"
                className="text-gold transition-colors hover:text-soft-gold"
              >
                0537682427
              </a>
            </p>
          </div>

          {/* Right visual area - desktop only */}
          <div className="relative hidden min-h-[560px] lg:block">
            <div className="absolute right-0 top-1/2 h-[72%] w-[78%] -translate-y-1/2 border border-gold/20" />

            {floatingTags.map((tag, index) => {
              const positions = [
                'right-12 top-[28%]',
                'right-0 top-[43%]',
                'right-24 top-[58%]',
                'right-6 top-[72%]',
              ];

              return (
                <div
                  key={tag}
                  className={`absolute z-30 ${positions[index]} animate-float`}
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  <span className="inline-flex rounded-full border border-gold/30 bg-dark-burgundy/70 px-4 py-2 text-xs font-light tracking-[0.08em] text-ivory/85 backdrop-blur-md">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#benefits"
        className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
