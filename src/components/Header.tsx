import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Réservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-dark-burgundy/95 backdrop-blur-xl border-b border-gold/20 shadow-[0_16px_50px_rgba(0,0,0,0.28)]'
          : 'bg-gradient-to-b from-deep-wine/85 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Official Logo */}
          <a
            href="#accueil"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
            aria-label="BE CUTE SPA - Accueil"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="BE CUTE SPA"
              className="h-12 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[210px] lg:h-16 lg:max-w-[240px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center px-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-[12px] font-light uppercase tracking-[0.22em] text-ivory/70 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:0537682427"
              className="flex items-center gap-2 text-ivory/75 transition-colors duration-300 hover:text-gold"
              aria-label="Appeler BE CUTE SPA"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light tracking-[0.08em]">
                0537682427
              </span>
            </a>

            <a
              href="https://wa.me/212666948022"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold px-7 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-dark-text hover:shadow-[0_0_30px_rgba(212,175,106,0.25)]"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-gold/25 p-3 text-ivory transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-20 z-40 overflow-hidden border-t border-gold/10 bg-dark-burgundy/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'h-[calc(100vh-5rem)] opacity-100 pointer-events-auto'
            : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Opaque premium background */}
        <div className="absolute inset-0 bg-deep-wine/95" />
        <div className="absolute inset-0 bg-dark-burgundy/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,106,0.08),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(75,5,5,0.35),transparent_38%)]" />

        <nav className="relative z-10 flex h-full flex-col px-6 py-8">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between border-b border-gold/10 py-4 text-sm font-light uppercase tracking-[0.24em] text-ivory/80 transition-colors duration-300 hover:text-gold"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-gold/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4 border-t border-gold/15 pt-6">
            <a
              href="tel:0537682427"
              className="flex items-center gap-3 text-ivory/80 transition-colors duration-300 hover:text-gold"
            >
              <Phone className="h-5 w-5 text-gold" />
              <span className="text-base tracking-[0.08em]">0537682427</span>
            </a>

            <a
              href="https://wa.me/212666948022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-gold px-6 py-4 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-dark-text transition-all duration-300 hover:bg-soft-gold"
            >
              Réserver maintenant
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
