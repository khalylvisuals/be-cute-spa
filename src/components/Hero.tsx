import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-deep-wine"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-[center_right]"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-spa-ritual.png')`,
        }}
      />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-wine via-deep-wine/88 to-deep-wine/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-wine via-deep-wine/20 to-deep-wine/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(212,175,106,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(75,5,5,0.38),transparent_38%)]" />

      {/* Decorative Lines */}
      <div className="absolute left-6 top-28 hidden h-40 w-px bg-gradient-to-b from-gold/60 to-transparent md:block" />
      <div className="absolute bottom-12 right-10 hidden h-px w-40 bg-gradient-to-r from-transparent to-gold/60 md:block" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 border border-gold/30 bg-deep-wine/45 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-[11px] font-light uppercase tracking-[0.24em] text-ivory/75">
              Wellness & Beauty Lounge
            </span>
          </div>

          <h1 className="luxury-heading text-balance text-4xl text-ivory sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            BE CUTE SPA
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-warm-beige sm:text-xl sm:leading-9">
            Une adresse raffinée à Rabat pour hammam marocain, massages
            relaxants et rituels bien-être dans une ambiance calme, chaude et
            élégante.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/212666948022"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-filled group"
            >
              Réserver maintenant
              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a href="#services" className="btn-gold">
              Découvrir nos soins
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-sm font-light text-ivory/70 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              <span>Rabat, Maroc</span>
            </div>

            <div className="hidden h-4 w-px bg-gold/30 sm:block" />

            <span>Hammam • Massage • Relaxation</span>
          </div>
        </div>
      </div>

      {/* Desktop Floating Cards */}
      <div className="absolute bottom-14 right-10 z-10 hidden max-w-sm border border-gold/25 bg-deep-wine/65 p-6 backdrop-blur-xl lg:block">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
          Signature BE CUTE SPA
        </p>
        <p className="mt-3 text-sm font-light leading-7 text-ivory/75">
          Des soins pensés pour elle et lui, dans un espace intime dédié au
          calme, à la beauté et à la détente.
        </p>
      </div>
    </section>
  );
}
