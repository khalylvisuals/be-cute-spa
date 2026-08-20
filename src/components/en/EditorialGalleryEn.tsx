import { useState } from 'react';
import Image from '../Image';
import { X } from 'lucide-react';

const galleryCategories = [
  {
    id: 'espace',
    title: "The Space",
    images: [
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`, alt: 'Elegant reception BE CUTE SPA Rabat', width: 'w-full md:w-2/3', aspect: 'aspect-[4/3] md:aspect-[16/9]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-spa-luxury.png`, alt: 'Spa interior architecture and decoration', width: 'w-full md:w-1/3', aspect: 'aspect-[4/3] md:aspect-[3/4]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-massage-room.png`, alt: 'Soothing massage cabin', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-square' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-hammam-atmosphere.png`, alt: 'Traditional Moroccan hammam', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-[4/3]' },
    ]
  },
  {
    id: 'rituels',
    title: "The Rituals",
    images: [
      { src: `${import.meta.env.BASE_URL}images/services/service-hammam-traditionnel.png`, alt: 'Traditional hammam ritual', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-square' },
      { src: `${import.meta.env.BASE_URL}images/services/service-massage-relaxant.png`, alt: 'Professional relaxing massage', width: 'w-full md:w-1/2', aspect: 'aspect-[4/3] md:aspect-[4/3]' },
      { src: `${import.meta.env.BASE_URL}images/hero-spa-ritual.png`, alt: 'Body treatments', width: 'w-full', aspect: 'aspect-[4/3] md:aspect-[21/9]' },
    ]
  },
  {
    id: 'details',
    title: "The Details",
    images: [
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-ritual-details.png`, alt: 'Authentic Moroccan products', width: 'w-full md:w-1/3', aspect: 'aspect-[4/3] md:aspect-[3/4]' },
      { src: `${import.meta.env.BASE_URL}images/gallery/gallery-relaxation-tea.png`, alt: 'Welcome mint tea', width: 'w-full md:w-2/3', aspect: 'aspect-[4/3] md:aspect-[16/9]' },
      { src: `${import.meta.env.BASE_URL}images/about-spa-ambience.png`, alt: 'Decorative elements and towels', width: 'w-full', aspect: 'aspect-[4/3] md:aspect-[21/9]' },
    ]
  }
];

export default function EditorialGalleryEn({ hideCta = false }: { hideCta?: boolean }) {
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
            aria-label="Close"
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
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">Ready to live the experience?</h2>
            <p className="text-lg text-ink/75 font-light mb-10">
              Discover our hammam rituals, massages and wellness packages in Rabat Agdal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/services" className="btn-primary">
                Discover our treatments
              </a>
              <a 
                href={`https://wa.me/212666948022?text=Hello%20BE%20CUTE%20SPA%2C%20I%20would%20like%20to%20book%20a%20treatment.`}
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                Book now
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <a href="/en/gallery" className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-ink hover:text-gold-500 transition-colors">
              View full gallery <span className="ml-2">→</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
