import { SITE } from '../config/site';
import { servicesData, getWhatsAppLink } from '../data/services';

const menuData = {
  hammam: servicesData.hammam.map(s => ({
    name: s.nameFr,
    duration: s.durationFr,
    price: s.price
  })),
  massages: servicesData.massages.flatMap(m => 
    m.durations.map(d => ({
      name: m.nameFr,
      duration: d.time,
      price: d.price
    }))
  ),
  packages: servicesData.packages.map(p => ({
    name: p.nameFr,
    duration: p.duration,
    price: p.price,
    description: p.descriptionFr
  }))
};

type MenuItem = { name: string; duration: string; price: string; description?: string };

function MenuCategory({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-20 last:mb-0">
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8 text-center sm:text-left uppercase tracking-widest">{title}</h2>
      
      <div className="flex flex-col gap-4 sm:gap-0">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:py-5 sm:px-4 bg-white sm:bg-transparent border border-sand-300/20 sm:border-0 sm:border-b sm:border-sand-300/30 hover:bg-ivory-50 transition-colors duration-300 gap-4 sm:gap-8"
          >
            {/* Mobile Layout */}
            <div className="sm:hidden flex flex-col gap-2">
              <h3 className="font-medium text-lg text-ink">{item.name}</h3>
              {item.description && <p className="text-sm text-ink/70 font-light">{item.description}</p>}
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-ink/70 font-medium">{item.duration}</span>
                <span className="text-lg font-medium text-gold-600">{item.price}</span>
              </div>
              <a 
                href={getWhatsAppLink(item.name, false)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline w-full text-center mt-4 text-xs py-2"
              >
                Réserver
              </a>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center flex-grow">
              <div className="w-1/2 pr-4">
                <h3 className="font-medium text-lg text-ink group-hover:text-gold-700 transition-colors">{item.name}</h3>
                {item.description && <p className="text-sm text-ink/70 font-light mt-1">{item.description}</p>}
              </div>
              <div className="w-1/4 text-sm text-ink/70 font-medium">
                {item.duration}
              </div>
              <div className="w-1/4 text-right text-lg font-medium text-gold-600">
                {item.price}
              </div>
            </div>
            <div className="hidden sm:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32 justify-end">
              <a 
                href={getWhatsAppLink(item.name, false)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-medium uppercase tracking-widest text-gold-600 hover:text-ink transition-colors pb-1 border-b border-gold-600/30 hover:border-ink"
              >
                Réserver
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center sm:text-left">
        <a 
          href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=Bonjour%20BE%20CUTE%20SPA%2C%20je%20souhaite%20r%C3%A9server%20un%20soin.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-medium uppercase tracking-widest text-ink hover:text-gold-600 transition-colors"
        >
          Vous avez trouvé votre expérience ? <span className="underline underline-offset-4 ml-1">Réserver maintenant</span>
        </a>
      </div>
    </div>
  );
}

export default function TarifsMenu() {
  return (
    <section id="tarifs-menu" className="bg-ivory-50 pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <MenuCategory title="Hammam" items={menuData.hammam} />
        
        <MenuCategory title="Massages" items={menuData.massages} />
        
        <MenuCategory title="Nos forfaits" items={menuData.packages} />

      </div>
    </section>
  );
}
