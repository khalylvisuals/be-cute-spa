import { Star, StarHalf, MapPin, Clock } from 'lucide-react';
import { SITE } from '../config/site';

export default function Reviews() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
            Témoignages
          </h2>
          <p className="text-lg text-ink/75 font-light leading-relaxed">
            Consultez les avis et la note actualisés directement sur notre fiche Google.
          </p>
        </div>

        {/* Trust Strip & Summary */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-sand-300/20 p-8 mb-12 gap-8 shadow-sm">
          <div className="flex items-center gap-6">
            <span className="text-5xl font-display text-ink">{SITE.ratingValue.replace('.', ',')}</span>
            <div className="flex flex-col gap-1">
              <div className="flex text-gold-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <StarHalf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-medium uppercase tracking-widest text-ink/70">/ 5 — {SITE.reviewCount} avis Google</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 border-l border-sand-300/30 pl-8">
            <div className="flex items-center gap-3 text-ink/80">
              <MapPin className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium">Rabat Agdal</span>
            </div>
            <div className="flex items-center gap-3 text-ink/80">
              <Clock className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium">{SITE.openingHours.fr.replace('Tous les jours ', '')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {SITE.gbpUrl && (
              <>
                <a
                  href={SITE.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Lire nos avis
                </a>
                <a
                  href={`${SITE.gbpUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-center"
                >
                  Laisser un avis
                </a>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
