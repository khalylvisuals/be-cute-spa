import { SITE } from '../../config/site';

export default function ContactHeroEn() {
  return (
    <div className="bg-maroon-900 pt-32 pb-24 text-center border-b border-maroon-900/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <span className="mb-4 block text-[10px] font-medium uppercase tracking-widest text-gold-400">
          BE CUTE SPA — RABAT AGDAL
        </span>
        <h1 className="luxury-heading text-4xl font-extralight uppercase tracking-[0.16em] text-ivory-50 sm:text-5xl text-balance mb-6">
          Your moment begins here
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-ivory-50/80 font-light leading-relaxed mb-10">
          A question, a desire to book, or simply need some advice? Our team is at your disposal.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello BE CUTE SPA, I would like to book a treatment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book on WhatsApp
          </a>
          <a 
            href={`tel:${SITE.phoneE164}`}
            className="btn-secondary--on-dark"
          >
            Call us
          </a>
        </div>
      </div>
    </div>
  );
}
