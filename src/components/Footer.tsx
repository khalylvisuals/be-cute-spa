import { Phone, MapPin, Smartphone, Globe, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import Image from './Image';
import { getEquivalentRoute } from '../utils/routes';

const frNavLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Mentions légales', href: '/mentions-legales' },
];

const enNavLinks = [
  { label: 'Home', href: '/en' },
  { label: 'About', href: '/en/about' },
  { label: 'Services', href: '/en/services' },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Gallery', href: '/en/gallery' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Contact', href: '/en/contact' },
  { label: 'Legal Notice', href: '/en/legal' },
];

export default function Footer() {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const navLinks = isEn ? enNavLinks : frNavLinks;
  return (
    <footer className="border-t border-sand-300/20 bg-maroon-900 pb-20 sm:pb-0">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Brand */}
          <div>
            <Image
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="BE CUTE SPA"
              className="mb-5 h-16 w-auto max-w-[240px] object-contain sm:h-20"
            />

            <p className="mb-5 text-xs font-light uppercase tracking-luxury text-gold-300">
              Wellness & Beauty Lounge
            </p>

            <p className="max-w-md text-sm font-light leading-relaxed text-ivory-50/80">
              {isEn ? "Your wellness sanctuary in Rabat. Traditional Moroccan hammam, relaxing massages and rituals in a calm, elegant and refined atmosphere." : "Votre espace de bien-être à Rabat. Hammam marocain traditionnel, massages relaxants et rituels dans une atmosphère calme, élégante et raffinée."}
            </p>

            <div className="mt-7">
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(isEn ? "Hello BE CUTE SPA, I would like to book a treatment." : "Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-xs"
              >
                {isEn ? "Book via WhatsApp" : "Réserver via WhatsApp"}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-light uppercase tracking-[0.18em] text-ivory-50">
              Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-ivory-50/80 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-light uppercase tracking-[0.18em] text-ivory-50">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-sm font-light text-ivory-50/80">
                  {SITE.street}<br/>
                  {SITE.postalCode} {SITE.city}, {SITE.country}
                </span>
              </li>

              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="flex items-start gap-3 text-ivory-50/80 transition-colors hover:text-gold-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span className="text-sm font-light">{SITE.phoneDisplay}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(isEn ? "Hello BE CUTE SPA, I would like to book a treatment." : "Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ivory-50/80 transition-colors hover:text-gold-300"
                >
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span className="text-sm font-light">
                    +{SITE.whatsapp}
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-sm font-light text-ivory-50/80">
                  {isEn ? SITE.openingHours.en : SITE.openingHours.fr}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-sand-300/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm font-light text-ivory-50/80">
            © 2026 BE CUTE SPA. {isEn ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          <Link
            to={getEquivalentRoute(location.pathname, isEn ? 'fr' : 'en')}
            className="flex items-center gap-2 text-ivory-50/80 hover:text-gold-300 transition-colors duration-300"
            aria-label="Changer de langue / Change language"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-light">{isEn ? 'Passer en Français' : 'Switch to English'}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
