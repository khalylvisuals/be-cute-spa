import { useState } from 'react';
import Image from './Image';
import { X } from 'lucide-react';

const galleryCategories = [
  {
    id: 'espace',
    title: "L'espace",
    images: [
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`, alt: 'Réception élégante BE CUTE SPA Rabat', width: 'w-full md:w-2/3', aspect: 'aspect-[4/3] md:aspect-[16/9]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-spa-luxury.png`, alt: 'Architecture et décoration intérieure du spa', width: 'w-full md:w-1/3', aspect: 'aspect-[4/3] md:aspect-[3/4]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-massage-room.png`, alt: 'Cabine de massage apaisante', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-square' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-hammam-atmosphere.png`, alt: 'Hammam traditionnel marocain', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-[4/3]' },
    ]
  },
  {
    id: 'rituels',
    title: "Les rituels",
    images: [
      { src: `${import.meta.env.BASE_URL}images/services/service-hammam-traditionnel.png`, alt: 'Rituel hammam traditionnel', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-square' },
      { src: `${import.meta.env.BASE_URL}images/services/service-massage-relaxant.png`, alt: 'Massage relaxant professionnel', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-[4/3]' },
      { src: `${import.meta.env.BASE_URL}images/hero-spa-ritual.png`, alt: 'Soins du corps', width: 'w-full', aspect: 'aspect-[4/3] md:aspect-[21/9]' },
    ]
  },
  {
    id: 'details',
    title: "Les détails",
    images: [
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-ritual-details.png`, alt: 'Produits marocains authentiques', width: 'w-full md:w-1/3', aspect: 'aspect-[4/3] md:aspect-[3/4]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-relaxation-tea.png`, alt: 'Thé de bienvenue à la menthe', width: 'w-full md:w-2/3', aspect: 'aspect-[4/3] md:aspect-[16/9]' },
      { src: `${import.meta.env.BASE_URL}images/about-spa-ambience.png`, alt: 'Éléments décoratifs et serviettes', width: 'w-full', aspect: 'aspect-[4/3] md:aspect-[21/9]' },
    ]
  }
];

export default function EditorialGallery({ hideCta = false }: { hideCta?: boolean }) {
  const [lightboxImage, setLightboxImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div id="galerie-grid" className="bg-ivory-50 pb-24">
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-ivory-50/70 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center">
            <Image 
              src={lightboxImage.src} 
              alt={lightboxImage.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20">
        {galleryCategories.map((category) => (
          <div key={category.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-ink">{category.title}</h2>
              <div className="h-[1px] flex-grow bg-sand-300/40"></div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {category.images.map((image, imgIdx) => (
                <div 
                  key={imgIdx} 
                  className={`${image.width} relative group cursor-pointer overflow-hidden rounded-sm`}
                  onClick={() => setLightboxImage(image)}
                >
                  <div className={`relative w-full ${image.aspect}`}>
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Gallery CTA */}
        {!hideCta ? (
          <div className="mt-32 pt-20 border-t border-sand-300/30 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">Prêt à vivre l'expérience ?</h2>
            <p className="text-lg text-ink/75 font-light mb-10">
              Découvrez nos rituels de hammam, massages et formules bien-être à Rabat Agdal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-primary">
                Découvrir nos soins
              </a>
              <a 
                href={`https://wa.me/212666948022?text=Bonjour%20BE%20CUTE%20SPA%2C%20je%20souhaite%20r%C3%A9server%20un%20soin.`}
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <a href="/galerie" className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-ink hover:text-gold-500 transition-colors">
              Voir toute la galerie <span className="ml-2">→</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
