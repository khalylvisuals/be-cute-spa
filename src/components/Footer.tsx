import { Phone, MapPin, Smartphone } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Réservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-deep-wine">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr] lg:gap-12">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="BE CUTE SPA"
              className="mb-5 h-16 w-auto max-w-[240px] object-contain sm:h-20"
            />

            <p className="mb-5 text-xs font-light uppercase tracking-luxury text-gold/80">
              Wellness & Beauty Lounge
            </p>

            <p className="max-w-md text-sm font-light leading-relaxed text-ivory/60">
              Votre espace de bien-être à Rabat. Hammam marocain traditionnel,
              massages relaxants et rituels dans une atmosphère calme, élégante
              et raffinée.
            </p>

            <div className="mt-7">
              <a
                href="https://wa.me/212666948022"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-filled inline-flex text-xs"
              >
                Réserver via WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-light uppercase tracking-[0.18em] text-ivory">
              Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-ivory/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-light uppercase tracking-[0.18em] text-ivory">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm font-light text-ivory/60">
                  Rabat, Maroc
                </span>
              </li>

              <li>
                <a
                  href="tel:0537682427"
                  className="flex items-start gap-3 text-ivory/60 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm font-light">0537682427</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/212666948022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ivory/60 transition-colors hover:text-gold"
                >
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm font-light">
                    +212 666 948 022
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gold/10 pt-8 text-center">
          <p className="text-sm font-light text-ivory/40">
            © 2026 BE CUTE SPA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}