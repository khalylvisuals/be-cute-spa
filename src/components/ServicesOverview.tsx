import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-gold-700" />
            Nos services d'exception en un coup d'œil
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-6"></div>
          <p className="max-w-2xl mx-auto text-ink/80 font-light leading-relaxed">
            BE CUTE SPA réunit plusieurs expériences de bien-être à Rabat Agdal pour vous permettre de choisir le rituel qui correspond à vos envies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              title: 'Hammam marocain traditionnel', 
              desc: "Découvrez nos différents rituels de hammam avec savon noir, tebrima, gommage, ghassoul et soins complémentaires selon la formule choisie." 
            },
            { 
              title: 'Massages', 
              desc: "Profitez de massages proposés selon différentes techniques et durées, notamment le massage relaxant, le massage suédois et le massage dos & nuque." 
            },
            { 
              title: 'Formules bien-être', 
              desc: "Combinez plusieurs prestations pour profiter d'une expérience plus complète avec nos packages associant hammam et massage." 
            },
            { 
              title: 'Soins & beauté', 
              desc: "Découvrez également les prestations de soin et de beauté actuellement proposées par BE CUTE SPA." 
            }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white border border-sand-300/30 rounded-xl text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gold-700/40 transition-colors flex flex-col h-full">
              <h3 className="text-lg font-medium text-ink mb-3">{service.title}</h3>
              <p className="text-sm font-light text-ink/75 flex-grow leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-500/10 text-gold-700 border border-sand-300/50 rounded-full hover:bg-gold-500 hover:text-ink transition-colors duration-300 font-medium"
          >
            Découvrir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}