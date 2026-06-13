import { MapPin, Phone, Smartphone, ExternalLink, Clock } from 'lucide-react';

const googleMapsLink =
  'https://www.google.com/maps/place/Bc+spa/@34.0039585,-6.8528819,684m/data=!3m1!1e3!4m18!1m9!3m8!1s0xda76d29d76e6603:0x2013df4e70c790c5!2sBc+spa!8m2!3d34.0039585!4d-6.850307!9m1!1b1!16s%2Fg%2F11lq4ghr8k!3m7!1s0xda76d29d76e6603:0x2013df4e70c790c5!8m2!3d34.0039585!4d-6.850307!9m1!1b1!16s%2Fg%2F11lq4ghr8k?entry=ttu';

const openingHours = [
  { day: 'Jeudi', hours: '10:30 – 23:30' },
  { day: 'Vendredi', hours: '10:00 – 23:00' },
  { day: 'Samedi', hours: '10:00 – 23:30' },
  { day: 'Dimanche', hours: '10:00 – 23:30' },
  { day: 'Lundi', hours: '10:00 – 23:00' },
  { day: 'Mardi', hours: '10:00 – 23:30' },
  { day: 'Mercredi', hours: '10:00 – 23:30' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-burgundy">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Content */}
          <div>
            <div className="mb-8">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="BE CUTE SPA"
                className="mb-5 h-16 w-auto max-w-[240px] object-contain sm:h-20"
              />

              <p className="text-xs font-light uppercase tracking-luxury text-gold/80">
                Wellness & Beauty Lounge
              </p>
            </div>

            <h2 className="luxury-heading mb-6 text-4xl font-extralight uppercase tracking-[0.18em] text-ivory sm:text-5xl">
              Contactez-nous
            </h2>

            <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-ivory/68 sm:text-base">
              Nous serons ravis de vous accueillir chez BE CUTE SPA. Contactez-nous
              pour toute question, information ou réservation.
            </p>

            <div className="mb-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-light uppercase tracking-[0.16em] text-ivory/45">
                    Adresse
                  </p>
                  <p className="mt-1 font-light text-ivory">Rabat, Maroc</p>
                </div>
              </div>

              <a
                href="tel:0537682427"
                className="flex items-start gap-4 text-ivory transition-colors hover:text-gold"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-light uppercase tracking-[0.16em] text-ivory/45">
                    Téléphone
                  </p>
                  <p className="mt-1 font-light">0537682427</p>
                </div>
              </a>

              <a
                href="https://wa.me/212666948022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-ivory transition-colors hover:text-gold"
              >
                <Smartphone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-light uppercase tracking-[0.16em] text-ivory/45">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-light">+212 666 948 022</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="tel:0537682427" className="btn-gold inline-flex">
                Appeler maintenant
              </a>

              <a
                href="https://wa.me/212666948022"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-filled inline-flex"
              >
                Réserver via WhatsApp
              </a>
            </div>
          </div>

          {/* Map and hours */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative min-h-[360px] overflow-hidden border border-gold/20 bg-deep-wine sm:min-h-[420px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,106,0.13),transparent_26%),linear-gradient(135deg,#250202_0%,#120606_65%,#050202_100%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-dark-burgundy/40">
                  <MapPin className="h-7 w-7 text-gold" />
                </div>

                <p className="mb-3 text-xl font-light uppercase tracking-[0.18em] text-ivory">
                  BE CUTE SPA
                </p>

                <p className="mb-7 text-sm font-light leading-relaxed text-ivory/60">
                  Rabat, Maroc
                  <br />
                  Ouvrez l’itinéraire directement sur Google Maps.
                </p>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex text-xs"
                >
                  Ouvrir sur Google Maps
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="border border-gold/20 bg-deep-wine/55 p-6 sm:p-8">
              <h3 className="mb-6 flex items-center text-lg font-light uppercase tracking-[0.16em] text-ivory">
                <Clock className="mr-2 h-5 w-5 text-gold" />
                Horaires d’ouverture
              </h3>

              <div className="space-y-3">
                {openingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between gap-6 text-sm"
                  >
                    <span className="font-light text-ivory/60">
                      {schedule.day}
                    </span>
                    <span className="font-light text-ivory/80">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
