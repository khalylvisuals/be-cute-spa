import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Globe } from 'lucide-react';
import Image from './Image';
import { SITE } from '../config/site';
import { getEquivalentRoute } from '../utils/routes';

const frNavLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const enNavLinks = [
  { label: 'Home', href: '/en' },
  { label: 'About', href: '/en/about' },
  { label: 'Services', href: '/en/services' },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Gallery', href: '/en/gallery' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Contact', href: '/en/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const navLinks = isEn ? enNavLinks : frNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-sand-300/20 shadow-[0_16px_50px_rgba(0,0,0,0.28)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[81px] xl:h-[97px] items-center justify-between">
          {/* Official Logo */}
          <Link
            to={isEn ? '/en' : '/'}
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
            aria-label={isEn ? 'BE CUTE SPA - Home' : 'BE CUTE SPA - Accueil'}
          >
            <Image
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="BE CUTE SPA"
              width={120}
              height={40}
              className="h-10 w-auto object-contain sm:h-[3.75rem]"
              loading="eager"
              // @ts-expect-error React 18 type definition expects fetchPriority, but DOM expects fetchpriority
              fetchpriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center px-4 xl:px-8 min-w-0">
            <ul className="flex items-center gap-4 xl:gap-5">
              {navLinks.map((link) => (
                <li key={link.label} className="shrink-0">
                  <Link
                    to={link.href}
                    className="relative whitespace-nowrap text-[12px] font-light uppercase tracking-[0.10em] text-ivory-50/70 transition-colors duration-300 hover:text-gold-700 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 xl:flex shrink-0">
            <Link
              to={getEquivalentRoute(location.pathname, isEn ? 'fr' : 'en')}
              className="flex items-center gap-1.5 whitespace-nowrap text-ivory-50/70 hover:text-gold-700 transition-colors duration-300 mr-2"
              aria-label="Changer de langue / Change language"
            >
              <Globe className="h-4 w-4 shrink-0" />
              <span className="text-[11px] font-medium uppercase tracking-widest">{isEn ? 'FR' : 'EN'}</span>
            </Link>

            <a
              href={`tel:${SITE.phoneE164}`}
              className="flex items-center gap-2 whitespace-nowrap text-ivory-50/75 transition-colors duration-300 hover:text-gold-700"
              aria-label="Appeler BE CUTE SPA"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="text-sm font-light tracking-[0.08em]">
                Appeler
              </span>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(isEn ? "Hello BE CUTE SPA, I would like to book a treatment." : "Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary--on-dark whitespace-nowrap shrink-0 border-gold-500/50 hover:border-gold-500 hover:text-gold-500 hover:bg-transparent"
            >
              {isEn ? 'Book Now' : 'Réserver'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-sand-300/25 p-3 text-ivory-50 transition-colors duration-300 hover:border-sand-300 hover:text-gold-700 xl:hidden shrink-0"
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
        className={`fixed inset-x-0 z-40 overflow-y-auto overscroll-contain transition-all duration-500 xl:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          top: 'var(--header-h)',
          maxHeight: 'calc(100svh - var(--header-h))',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))'
        }}
      >
        {/* Opaque premium background */}
        <div className="absolute inset-0 bg-maroon-900/98 backdrop-blur-3xl min-h-full" />
        <div className="absolute inset-0 bg-maroon-700/95 min-h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,106,0.08),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(75,5,5,0.35),transparent_38%)] min-h-full" />

        <nav className="relative z-10 flex min-h-full flex-col px-6 pt-8 pb-12">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between border-b border-sand-300/10 py-4 text-sm font-light uppercase tracking-[0.24em] text-ivory-50/80 transition-colors duration-300 hover:text-gold-700"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-gold-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4 border-t border-sand-300/15 pt-6">
            <Link
              to={getEquivalentRoute(location.pathname, isEn ? 'fr' : 'en')}
              onClick={closeMobileMenu}
              className="flex items-center gap-3 text-ivory-50/80 transition-colors duration-300 hover:text-gold-700"
            >
              <Globe className="h-5 w-5 text-gold-700" />
              <span className="text-sm font-medium uppercase tracking-widest">{isEn ? 'Passer en Français' : 'Switch to English'}</span>
            </Link>

            <a
              href={`tel:${SITE.phoneE164}`}
              className="flex items-center gap-3 text-ivory-50/80 transition-colors duration-300 hover:text-gold-700"
            >
              <Phone className="h-5 w-5 text-gold-700" />
              <span className="text-base tracking-[0.08em]">{SITE.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(isEn ? "Hello BE CUTE SPA, I would like to book a treatment." : "Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              {isEn ? 'Book Now' : 'Réserver maintenant'}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
