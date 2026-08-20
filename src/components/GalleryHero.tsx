import { ArrowDown } from 'lucide-react';
import Image from './Image';

export default function GalleryHero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="L'expérience spa BE CUTE à Rabat"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            GALERIE
          </p>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-balance leading-[1.1]">
            L'expérience BE CUTE SPA
          </h1>
          <p className="text-lg leading-relaxed text-ivory-100 max-w-2xl mx-auto text-pretty">
            Découvrez l'univers de BE CUTE SPA à travers nos espaces, nos rituels et les détails qui rendent chaque visite unique.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#galerie-grid"
        onClick={(e) => handleScroll(e, 'galerie-grid')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50/70 hover:text-gold-400 transition-colors z-10"
        aria-label="Voir la galerie"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Découvrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}