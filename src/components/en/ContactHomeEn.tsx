import { SITE } from '../../config/site';

export default function ContactHomeEn() {
  return (
    <section id="contact-home" className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="luxury-heading mb-6 text-4xl font-extralight uppercase tracking-[0.18em] text-ink sm:text-5xl">
          Your moment of relaxation starts here
        </h2>

        <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-8"></div>

        <p className="mb-10 max-w-2xl mx-auto text-sm font-light leading-relaxed text-ink/68 sm:text-base">
          Want to enjoy a Moroccan hammam, a relaxing massage, or a wellness package in Rabat Agdal? Discover our services and choose the experience that suits you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20BE%20CUTE%20SPA%2C%20I%20would%20like%20to%20book%20a%20treatment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Book now
          </a>

          <a 
            href="/en/pricing" 
            className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
          >
            View our prices
          </a>
        </div>
      </div>
    </section>
  );
}
