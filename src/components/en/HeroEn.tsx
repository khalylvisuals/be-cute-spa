import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HeroEn() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Forcer la lecture sur iOS Safari
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-maroon-900"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          poster={`${import.meta.env.BASE_URL}hero-spa-ritual.avif`}
        >
          <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-maroon-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-black/40" />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-5 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 flex flex-col items-center gap-2">
            <span className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl font-extralight text-ivory-50 lowercase tracking-wider">
              be cute spa
            </span>
            <span className="luxury-heading text-lg sm:text-xl font-light uppercase tracking-[0.2em] text-gold-500 mt-4">
              Spa, Hammam & Massage in Rabat Agdal
            </span>
          </h1>

          <p className="mx-auto mb-9 max-w-3xl text-base font-light leading-relaxed text-ivory-50/90 sm:text-lg">
            Discover BE CUTE SPA in Rabat Agdal, a space dedicated to well-being with traditional Moroccan hammam, relaxing massages and wellness packages. Enjoy a moment of relaxation in an elegant and soothing setting, with easy booking by phone or WhatsApp.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+212537682427"
              className="btn-primary w-full sm:w-auto"
            >
              Book now
            </a>

            <Link 
              to="/en/services" 
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-sm border border-ivory-50 bg-transparent px-8 text-xs font-medium uppercase tracking-[0.12em] text-ivory-50 transition-all duration-300 hover:bg-ivory-50 hover:text-maroon-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              Discover our treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
