import { useState } from 'react';
import { servicesData, getWhatsAppLink } from '../../data/services';

export default function ServicesMenuEn() {
  const [activeCategory, setActiveCategory] = useState('all');

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== 'all') {
      const element = document.getElementById(categoryId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div id="menu" className="bg-ivory-50 pb-24">
      {/* Category Navigation */}
      <div className="sticky top-[var(--header-h)] z-30 bg-ivory-50/90 backdrop-blur-md border-b border-sand-300/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-6 no-scrollbar snap-x">
            {[
              { id: 'all', label: 'All' },
              { id: 'hammam', label: 'Hammam' },
              { id: 'massages', label: 'Massages' },
              { id: 'packages', label: 'Packages' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`snap-start whitespace-nowrap text-sm font-medium uppercase tracking-wide-plus transition-colors duration-300 ${
                  activeCategory === cat.id || (activeCategory === 'all' && cat.id === 'all')
                    ? 'text-gold-600'
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 lg:pt-24 space-y-24">
        
        {/* Hammam Section */}
        {(activeCategory === 'all' || activeCategory === 'hammam') && (
          <section id="hammam" className="scroll-mt-32">
            <div className="mb-12 max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">Moroccan Hammam Rituals</h2>
              <p className="text-lg text-ink/75 font-light leading-relaxed">
                The Moroccan hammam is much more than a simple bath: it's a true ritual of purification and relaxation. Discover our authentic experiences in the heart of Rabat.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {servicesData.hammam.map((service, index) => (
                <div key={index} className="flex flex-col bg-white border border-sand-300/20 p-8 hover:border-gold-300/30 transition-colors duration-300">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-gold-600 mb-4 block">
                    Hammam
                  </span>
                  <h3 className="font-display text-2xl text-ink mb-3">{service.nameEn}</h3>
                  <p className="text-ink/70 font-light text-sm mb-6 flex-grow">{service.descriptionEn}</p>
                  
                  <div className="border-t border-sand-300/20 pt-6 mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs uppercase tracking-wider font-medium text-ink">Duration</span>
                      <span className="text-sm font-medium text-ink">{service.durationEn}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs uppercase tracking-wider font-medium text-ink">Price</span>
                      <span className="text-lg font-medium text-gold-600">{service.price}</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-ink/60 mb-3 block">What's included</span>
                    <ul className="space-y-2">
                      {service.inclusionsEn.map((item, i) => (
                        <li key={i} className="text-sm text-ink/80 flex items-start">
                          <span className="text-gold-500 mr-2 mt-1 text-xs">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a href={getWhatsAppLink(service.nameEn, true)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      Book this treatment
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Massages Section */}
        {(activeCategory === 'all' || activeCategory === 'massages') && (
          <section id="massages" className="scroll-mt-32">
            <div className="mb-12 max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">Massages & Relaxation</h2>
              <p className="text-lg text-ink/75 font-light leading-relaxed">
                Release tension and regain your balance with our massages performed by professional practitioners, tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {servicesData.massages.map((service, index) => (
                <div key={index} className="flex flex-col bg-white border border-sand-300/20 p-8 hover:border-gold-300/30 transition-colors duration-300">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-gold-600 mb-4 block">
                    Massage
                  </span>
                  <h3 className="font-display text-2xl text-ink mb-3">{service.nameEn}</h3>
                  <p className="text-ink/70 font-light text-sm mb-6 flex-grow">{service.descriptionEn}</p>
                  
                  <div className="border-t border-b border-sand-300/20 py-6 mb-8 space-y-4">
                    {service.durations.map((d, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-ink">{d.time}</span>
                        <span className="text-lg font-medium text-gold-600">{d.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a href={getWhatsAppLink(service.nameEn, true)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      Book this massage
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Packages Section */}
        {(activeCategory === 'all' || activeCategory === 'packages') && (
          <section id="packages" className="scroll-mt-32">
            <div className="mb-12 max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">Signature Experiences</h2>
              <p className="text-lg text-ink/75 font-light leading-relaxed">
                The perfect combination of Moroccan hammam and massage. Complete packages designed to offer you total disconnection for body and mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {servicesData.packages.map((service, index) => (
                <div key={index} className="flex flex-col bg-ink text-ivory-50 p-8 lg:p-10">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-gold-400 mb-4 block">
                    Signature Package
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl mb-4">{service.nameEn}</h3>
                  <p className="text-ivory-100/70 font-light text-sm sm:text-base mb-8 flex-grow">{service.descriptionEn}</p>
                  
                  <div className="border-t border-ivory-50/10 pt-6 mb-8">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs uppercase tracking-wider font-medium text-ivory-100">Total Duration</span>
                      <span className="text-sm font-medium text-ivory-50">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs uppercase tracking-wider font-medium text-ivory-100">Price</span>
                      <span className="text-xl font-medium text-gold-400">{service.price}</span>
                    </div>
                  </div>

                  <div className="mb-10 flex-grow">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-ivory-100/60 mb-4 block">What's included</span>
                    <ul className="space-y-3">
                      {service.inclusionsEn.map((item, i) => (
                        <li key={i} className="text-sm text-ivory-100 flex items-start">
                          <span className="text-gold-400 mr-3 mt-1 text-xs">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a href={getWhatsAppLink(service.nameEn, true)} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-center">
                      Book this experience
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}