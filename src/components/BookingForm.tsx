import { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  MessageSquare,
  Phone,
  Smartphone,
  MapPin,
  Sparkles,
} from 'lucide-react';

const serviceOptions = [
  'Hammam Traditionnel - 300 DH',
  'Hammam Royale - 400 DH',
  'Hammam Sultan - 500 DH',
  'Massage Relaxant - 45 min 300 DH / 60 min 400 DH',
  'Massage Suédois - 45 min 300 DH / 60 min 400 DH',
  'Massage Dos & Nuque - 45 min 300 DH',
  'Pack Hammam Traditionnel + Massage - 500 DH',
  'Pack Hammam Royale + Massage - 600 DH',
  'Autre demande',
];

const timeOptions = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
];

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatDateForWhatsApp(date: string) {
  if (!date) return '';

  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Bonjour BE CUTE SPA,
Je souhaite réserver un moment.

Nom : ${formData.name}
Téléphone : ${formData.phone}
Service souhaité : ${formData.service}
Date souhaitée : ${formatDateForWhatsApp(formData.date)}
Heure souhaitée : ${formData.time}
Message : ${formData.message || 'Aucun message supplémentaire'}`;

    window.open(
      `https://wa.me/212666948022?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="reservation" className="section-padding bg-deep-wine">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-luxury text-gold/80">
            Réservation
          </p>

          <h2 className="luxury-heading text-4xl font-extralight uppercase tracking-[0.2em] text-ivory sm:text-5xl lg:text-6xl">
            Réservez votre moment
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
            Choisissez votre soin, indiquez la date et l’heure souhaitées, puis
            envoyez votre demande directement sur WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Form */}
          <div className="border border-gold/20 bg-dark-burgundy/55 p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="flex items-center text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                >
                  <User className="mr-2 h-4 w-4 text-gold" />
                  Nom complet
                </label>

                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-gold"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="phone"
                  className="flex items-center text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                >
                  <Phone className="mr-2 h-4 w-4 text-gold" />
                  Téléphone
                </label>

                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-gold"
                  placeholder="Votre numéro"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="service"
                  className="text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                >
                  Service souhaité
                </label>

                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors focus:border-gold"
                >
                  <option value="">Sélectionner un service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <label
                    htmlFor="date"
                    className="flex items-center text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-gold" />
                    Date souhaitée
                  </label>

                  <input
                    type="date"
                    id="date"
                    required
                    min={getTodayDate()}
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="time"
                    className="flex items-center text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                  >
                    <Clock className="mr-2 h-4 w-4 text-gold" />
                    Heure souhaitée
                  </label>

                  <select
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors focus:border-gold"
                  >
                    <option value="">Choisir une heure</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="flex items-center text-xs font-light uppercase tracking-[0.22em] text-ivory/75"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-gold" />
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none border border-gold/20 bg-deep-wine/55 px-4 py-4 text-sm font-light text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-gold"
                  placeholder="Précisions, préférences..."
                />
              </div>

              <button type="submit" className="btn-gold-filled w-full">
                Réserver via WhatsApp
              </button>
            </form>
          </div>

          {/* Side information */}
          <div className="space-y-6">
            <div className="border border-gold/20 bg-dark-burgundy/55 p-6 sm:p-8">
              <h3 className="mb-5 flex items-center text-lg font-light uppercase tracking-[0.18em] text-ivory">
                <Sparkles className="mr-2 h-5 w-5 text-gold" />
                Réservation rapide
              </h3>

              <p className="mb-6 text-sm font-light leading-relaxed text-ivory/62">
                Une fois le formulaire envoyé, votre demande s’ouvre
                automatiquement sur WhatsApp. L’équipe BE CUTE SPA pourra vous
                confirmer la disponibilité du créneau.
              </p>

              <div className="border-t border-gold/15 pt-5">
                <p className="mb-4 text-xs font-light uppercase tracking-[0.2em] text-gold/80">
                  Services disponibles
                </p>

                <ul className="space-y-3 text-sm font-light text-ivory/65">
                  <li>Hammams à partir de 300 DH</li>
                  <li>Massages à partir de 300 DH</li>
                  <li>Packs hammam + massage dès 500 DH</li>
                </ul>
              </div>
            </div>

            <div className="border border-gold/20 bg-dark-burgundy/55 p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-light uppercase tracking-[0.18em] text-ivory">
                Contact direct
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:0537682427"
                  className="flex items-center gap-3 text-ivory/70 transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="font-light">0537682427</span>
                </a>

                <a
                  href="https://wa.me/212666948022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ivory/70 transition-colors hover:text-gold"
                >
                  <Smartphone className="h-5 w-5 text-gold" />
                  <span className="font-light">+212 661 428 708</span>
                </a>

                <div className="flex items-start gap-3 text-ivory/70">
                  <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                  <span className="font-light">Rabat, Maroc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}