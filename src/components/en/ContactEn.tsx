import { useState } from 'react';
import { MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE } from '../../config/site';
import { servicesData } from '../../data/services';

const contactFaqs = [
  { 
    question: "How to book?", 
    answer: "Booking is done primarily via WhatsApp or by phone. This allows us to advise you on the most suitable treatment and check real-time availability." 
  },
  { 
    question: "Can I book via WhatsApp?", 
    answer: "Absolutely. It's actually the booking method we recommend for a quick and personalized response." 
  },
  { 
    question: "What are your opening hours?", 
    answer: SITE.openingHours.en
  },
  { 
    question: "Where is BE CUTE SPA located?", 
    answer: `${SITE.street}, ${SITE.postalCode} ${SITE.city}`
  },
  {
    question: "How can I check the prices?",
    answer: "You can view all our services and prices directly on our Pricing page."
  }
];

export default function ContactEn() {
  const [selectedService, setSelectedService] = useState('');

  const allServices = [
    ...servicesData.hammam.map(s => s.nameEn),
    ...servicesData.massages.map(m => m.nameEn),
    ...servicesData.packages.map(p => p.nameEn)
  ];

  const whatsappMessage = selectedService
    ? `Hello BE CUTE SPA, I would like to book the treatment: ${selectedService}.`
    : `Hello BE CUTE SPA, I would like to book a treatment.`;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-ivory-50 pb-32">
      {/* Action Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <Phone className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">Call us</h3>
            <p className="text-ink/70 font-light mb-6">{SITE.phoneDisplay}</p>
            <a href={`tel:${SITE.phoneE164}`} className="btn-outline w-full justify-center">
              Call us
            </a>
          </div>
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <MessageCircle className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">WhatsApp</h3>
            <p className="text-ink/70 font-light mb-6">+{SITE.whatsapp}</p>
            <a 
              href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello BE CUTE SPA, I would like to book a treatment.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full justify-center"
            >
              Write on WhatsApp
            </a>
          </div>
          <div className="bg-white border border-sand-300/20 p-8 shadow-sm text-center">
            <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-ink mb-2">Find us</h3>
            <p className="text-ink/70 font-light mb-6">{SITE.district}</p>
            <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
              Get Directions
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
              Book your experience
            </h2>
            <p className="text-lg text-ink/75 font-light leading-relaxed mb-10">
              Choose your treatment and contact us directly to organize your visit to BE CUTE SPA.
            </p>

            <div className="bg-white border border-sand-300/20 p-8 shadow-sm">
              <label htmlFor="service-select" className="block text-sm font-medium uppercase tracking-widest text-ink/70 mb-4">
                Which treatment would you like to book?
              </label>
              <select 
                id="service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 rounded-none focus:outline-none focus:border-gold-500 text-ink mb-8"
              >
                <option value="">Select a treatment (Optional)</option>
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
                  Book on WhatsApp
                </a>
                <a 
                  href={`tel:${SITE.phoneE164}`}
                  className="btn-outline flex items-center justify-center gap-2 sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Call us
                </a>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div>
            <div className="bg-white border border-sand-300/20 p-8 sm:p-12 shadow-sm">
              <h3 className="font-display text-2xl text-ink mb-8">Send a request</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="service-form" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Desired treatment</label>
                  <select 
                    id="service-form"
                    className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 rounded-none focus:outline-none focus:border-gold-500 text-ink"
                  >
                    <option value="">Select a treatment (Optional)</option>
                    {allServices.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-ivory-50 border border-sand-300/30 px-4 py-3 focus:outline-none focus:border-gold-500 text-ink" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-outline w-full justify-center">
                  Send request
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
                alt="BE CUTE SPA Reception"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
                Find us in Rabat Agdal
              </h2>
              <p className="font-light text-ink/80 leading-relaxed mb-8">
                BE CUTE SPA welcomes you on Rue Aguelmane Sidi Ali, in the heart of Rabat Agdal.
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-gold-600 mb-2">Address</h4>
                  <p className="font-light text-ink/80">
                    <strong className="font-medium text-ink block mb-1">BE CUTE SPA</strong>
                    {SITE.street}<br/>
                    {SITE.postalCode} {SITE.city}, {SITE.country}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-gold-600 mb-2">Opening Hours</h4>
                  <p className="font-light text-ink/80">
                    {SITE.openingHours.en.split(' 10:')[0]}<br/>
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
                Get Directions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 border-b border-sand-300/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">A simple booking</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">01</span>
            <h3 className="font-medium text-lg text-ink mb-3">Choose your treatment</h3>
            <p className="text-ink/70 font-light">Discover our hammams, massages and packages.</p>
          </div>
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">02</span>
            <h3 className="font-medium text-lg text-ink mb-3">Contact us</h3>
            <p className="text-ink/70 font-light">Book via WhatsApp or phone.</p>
          </div>
          <div className="text-center">
            <span className="text-gold-500 font-display text-3xl mb-4 block">03</span>
            <h3 className="font-medium text-lg text-ink mb-3">Visit the spa</h3>
            <p className="text-ink/70 font-light">We welcome you in Rabat Agdal.</p>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-24">
        <h2 className="font-display text-3xl text-ink mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {contactFaqs.map((faq, index) => (
            <div key={index} className="bg-white border border-sand-300/20 p-6 sm:p-8">
              <h3 className="font-medium text-lg text-ink mb-3">{faq.question}</h3>
              {faq.question === "How can I check the prices?" ? (
                <p className="text-ink/75 font-light leading-relaxed">
                  You can view all our services and prices directly on our <a href="/en/pricing" className="text-gold-600 hover:text-ink underline underline-offset-4">Pricing page</a>.
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
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">Ready to take time for yourself?</h2>
        <p className="text-lg text-ink/75 font-light mb-10 text-balance">
          Moroccan hammam, relaxing massage or wellness experience: choose your treatment and let us welcome you in Rabat Agdal.
        </p>
        <a 
          href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello BE CUTE SPA, I would like to book a treatment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Book now
        </a>
      </section>
    </div>
  );
}
