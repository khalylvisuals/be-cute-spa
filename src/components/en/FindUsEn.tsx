import { SITE } from '../../config/site';

export default function FindUsEn() {
  return (
    <section className="section-padding bg-ivory-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink">
            Find BE CUTE SPA in Rabat Agdal
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-6"></div>
          <p className="max-w-2xl mx-auto text-ink/80 font-light leading-relaxed mb-4">
            Located on Rue Aguelmane Sidi Ali in Rabat, BE CUTE SPA welcomes you to Agdal for your moments of relaxation, hammam, and massage.
          </p>
          <p className="max-w-2xl mx-auto text-ink/80 font-light leading-relaxed mb-8">
            Check our location on Google Maps and easily get directions to our spa.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-sand-300/30 overflow-hidden">
          <div className="h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7281080838183!2d-6.85288188478465!3d34.00395848061917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d29d76e6603%3A0x2013df4e70c790c5!2sBc%20spa!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Maps - ${SITE.name}`}
            />
          </div>
          <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-cream-100/50 border-t border-sand-300/30">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-medium text-ink mb-1">BE CUTE SPA</h3>
              <p className="text-sm text-ink/75 font-light">Rue Aguelmane Sidi Ali<br/>10000 Rabat, Morocco</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={SITE.gbpUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                View on Google
              </a>
              <a
                href={SITE.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}