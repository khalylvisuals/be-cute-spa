import { ArrowDown } from 'lucide-react';
import Image from '../Image';

export default function AboutHeroEn() {
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
          alt="The art of wellness in Rabat Agdal"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-ink/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            OUR STORY
          </p>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-balance leading-[1.1]">
            The Art of Wellness in Rabat Agdal
          </h1>
          <p className="text-lg leading-relaxed text-ivory-100 max-w-2xl mx-auto text-pretty">
            An experience inspired by Moroccan traditions, designed around calm, care, and attention to every detail.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#brand-story"
        onClick={(e) => handleScroll(e, 'brand-story')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50/70 hover:text-gold-400 transition-colors z-10"
        aria-label="Discover our story"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}