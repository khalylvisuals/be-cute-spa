import { SITE } from '../config/site';

export default function ContactHome() {
  return (
    <section id="contact-home" className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="luxury-heading mb-6 text-4xl font-extralight uppercase tracking-[0.18em] text-ink sm:text-5xl">
          Votre moment de détente commence ici
        </h2>

        <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-8"></div>

        <p className="mb-10 max-w-2xl mx-auto text-sm font-light leading-relaxed text-ink/68 sm:text-base">
          Envie de profiter d'un hammam marocain, d'un massage relaxant ou d'une formule bien-être à Rabat Agdal ? Découvrez nos prestations et choisissez l'expérience qui vous correspond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=Bonjour%20BE%20CUTE%20SPA%2C%20je%20souhaite%20r%C3%A9server%20un%20soin.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Réserver maintenant
          </a>

          <a
            href="/tarifs"
            className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Voir nos tarifs
          </a>
        </div>
      </div>
    </section>
  );
}
