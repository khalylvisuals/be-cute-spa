import { useState } from 'react';
import { MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE } from '../config/site';
import { servicesData } from '../data/services';

const contactFaqs = [
  { 
    question: "Comment réserver ?", 
    answer: "La réservation se fait principalement par WhatsApp ou par téléphone. Cela nous permet de vous conseiller sur le soin le plus adapté et de vérifier les disponibilités en temps réel." 
  },
  { 
    question: "Peut-on réserver par WhatsApp ?", 
    answer: "Absolument. C'est même le moyen de réservation que nous recommandons pour une réponse rapide et personnalisée." 
  },
  { 
    question: "Quels sont vos horaires ?", 
    answer: SITE.openingHours.fr
  },
  { 
    question: "Où se trouve BE CUTE SPA ?", 
    answer: `${SITE.street}, ${SITE.postalCode} ${SITE.city}`
  },
  {
    question: "Comment consulter les tarifs ?",
    answer: "Vous pouvez consulter l'ensemble de nos prestations et prix directement sur notre page Tarifs."
  }
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');

  const allServices = [
    ...servicesData.hammam.map(s => s.nameFr),
    ...servicesData.massages.map(m => m.nameFr),
    ...servicesData.packages.map(p => p.nameFr)
  ];

  const whatsappMessage = selectedService
    ? `Bonjour BE CUTE SPA, je souhaite réserver le soin : ${selectedService}.`
    : `Bonjour BE CUTE SPA, je souhaite réserver un soin.`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-ivory-50 pb-32">
      {/* Action Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <Phone className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">Appeler</h3>
            <p className="text-ink/70 font-light mb-6">{SITE.phoneDisplay}</p>
            <a href={`tel:${SITE.phoneE164}`} className="btn-outline w-full justify-center">
              Appeler
            </a>
          </div>
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <MessageCircle className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">WhatsApp</h3>
            <p className="text-ink/70 font-light mb-6">+{SITE.whatsapp}</p>
            <a 
              href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full justify-center"
            >
              Écrire sur WhatsApp
            </a>
          </div>
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">Nous trouver</h3>
            <p className="text-ink/70 font-light mb-6">{SITE.district}</p>
            <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
              Voir l'itinéraire
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section & Simple Form */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Booking Area */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
              Réservez votre expérience
            </h2>
            <p className="text-lg text-ink/75 font-light leading-relaxed mb-10">
              Choisissez votre soin et contactez-nous directement pour organiser votre visite à BE CUTE SPA.
            </p>

            <div className="bg-white border border-sand-300/20 p-8 shadow-sm">
              <label htmlFor="service-select" className="block text-sm font-medium uppercase tracking-widest text-ink/70 mb-4">
                Quel soin souhaitez-vous réserver ?
              </label>
              <select 
                id="service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 rounded-none focus:outline-none focus:border-gold-500 text-ink mb-8"
              >
                <option value="">Sélectionnez un soin (Optionnel)</option>
                {allServices.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 flex-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Réserver sur WhatsApp
                </a>
                <a 
                  href={`tel:${SITE.phoneE164}`}
                  className="btn-outline flex items-center justify-center gap-2 sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Appeler
                </a>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div>
            <div className="bg-white border border-sand-300/20 p-8 sm:p-12 shadow-sm">
              <h3 className="font-display text-2xl text-ink mb-8">Envoyer une demande</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Nom</label>
                  <input type="text" id="name" className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Téléphone</label>
                  <input type="tel" id="phone" className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="Votre numéro" />
                </div>
                <div>
                  <label htmlFor="service-form" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Soin souhaité</label>
                  <select 
                    id="service-form"
                    className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 rounded-none focus:outline-none focus:border-gold-500 text-ink"
                  >
                    <option value="">Sélectionnez un soin (Optionnel)</option>
                    {allServices.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="btn-outline w-full justify-center">
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white border-y border-sand-300/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-[400px] lg:h-[500px] w-full overflow-hidden border border-sand-300/20 relative group">
              <img 
                src={`${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`}
                alt="Réception BE CUTE SPA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
                Retrouvez-nous à Rabat Agdal
              </h2>
              <p className="font-light text-ink/80 leading-relaxed mb-8">
                BE CUTE SPA vous accueille rue Aguelmane Sidi Ali, au cœur de Rabat Agdal.
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-gold-600 mb-2">Adresse</h4>
                  <p className="font-light text-ink/80">
                    <strong className="font-medium text-ink block mb-1">BE CUTE SPA</strong>
                    {SITE.street}<br/>
                    {SITE.postalCode} {SITE.city}, {SITE.country}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-gold-600 mb-2">Horaires</h4>
                  <p className="font-light text-ink/80">
                    {SITE.openingHours.fr.split(' 10:')[0]}<br/>
                    10:00 — 23:00
                  </p>
                </div>
              </div>

              <a 
                href={SITE.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-ink hover:text-gold-600 transition-colors"
              >
                Voir l'itinéraire <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 border-b border-sand-300/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Une réservation simple</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">01</span>
            <h3 className="font-medium text-lg text-ink mb-3">Choisissez votre soin</h3>
            <p className="text-ink/70 font-light">Découvrez nos hammams, massages et forfaits.</p>
          </div>
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">02</span>
            <h3 className="font-medium text-lg text-ink mb-3">Contactez-nous</h3>
            <p className="text-ink/70 font-light">Réservez par WhatsApp ou téléphone.</p>
          </div>
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">03</span>
            <h3 className="font-medium text-lg text-ink mb-3">Rendez-vous au spa</h3>
            <p className="text-ink/70 font-light">Nous vous accueillons à Rabat Agdal.</p>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-24">
        <h2 className="font-display text-3xl text-ink mb-12 text-center">Questions fréquentes</h2>
        <div className="space-y-6">
          {contactFaqs.map((faq, index) => (
            <div key={index} className="bg-white border border-sand-300/20 p-6 sm:p-8">
              <h3 className="font-medium text-lg text-ink mb-3">{faq.question}</h3>
              {faq.question === "Comment consulter les tarifs ?" ? (
                <p className="text-ink/75 font-light leading-relaxed">
                  Vous pouvez consulter l'ensemble de nos prestations et prix directement sur notre <a href="/tarifs" className="text-gold-600 hover:text-ink underline underline-offset-4">page Tarifs</a>.
                </p>
              ) : (
                <p className="text-ink/75 font-light leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">Prêt à prendre du temps pour vous ?</h2>
        <p className="text-lg text-ink/75 font-light mb-10 text-balance">
          Hammam marocain, massage relaxant ou expérience bien-être : choisissez votre soin et laissez-nous vous accueillir à Rabat Agdal.
        </p>
        <a 
          href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Bonjour BE CUTE SPA, je souhaite réserver un soin.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Réserver maintenant
        </a>
      </section>
    </div>
  );
}
