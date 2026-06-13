import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/212666948022"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold text-deep-wine shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-soft-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-deep-wine lg:hidden"
      style={{
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom))',
      }}
      aria-label="Contacter BE CUTE SPA via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />

      <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-deep-wine bg-green-500" />

      <span className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-xl" />
    </a>
  );
}