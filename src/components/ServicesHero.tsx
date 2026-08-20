import { ArrowDown } from 'lucide-react';
import Image from './Image';

export default function ServicesHero() {
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
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
          alt="Hammam marocain traditionnel à BE CUTE SPA Rabat Agdal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            BE CUTE SPA — RABAT AGDAL
          </p>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-balance leading-[1.1]">
            Nos soins & expériences bien-être
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-ivory-100 max-w-2xl text-pretty">
            Découvrez nos rituels de hammam, massages et expériences bien-être imaginés pour vous offrir un moment de détente dans un cadre élégant et apaisant à Rabat Agdal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="/tarifs" className="btn-primary w-full sm:w-auto text-center">
              Voir les tarifs
            </a>
            <a 
              href="https://wa.me/212666948022?text=Bonjour%20BE%20CUTE%20SPA%2C%20je%20souhaite%20r%C3%A9server%20un%20soin."
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-outline w-full sm:w-auto text-center border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-ink"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#menu"
        onClick={(e) => handleScroll(e, 'menu')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50/70 hover:text-gold-400 transition-colors z-10"
        aria-label="Découvrir nos soins"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Découvrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}