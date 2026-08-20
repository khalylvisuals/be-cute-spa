import { ArrowDown } from 'lucide-react';
import Image from './Image';

export default function TarifsHero() {
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
    <section className="relative min-h-[60vh] flex items-center pt-24 lg:pt-32 pb-16 lg:pb-24 bg-ink">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
          alt="Tarifs et carte des soins BE CUTE SPA Rabat"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            CARTE DES SOINS
          </p>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-balance leading-[1.1]">
            Tarifs & carte des soins
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-ivory-100 max-w-2xl mx-auto text-pretty">
            Découvrez nos tarifs et choisissez l'expérience qui correspond à vos envies et au temps dont vous disposez.
          </p>
        </div>
      </div>

      <a 
        href="#tarifs-menu"
        onClick={(e) => handleScroll(e, 'tarifs-menu')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50/70 hover:text-gold-400 transition-colors z-10"
        aria-label="Voir la carte des soins"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Explorer</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}