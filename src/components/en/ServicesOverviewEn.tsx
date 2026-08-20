import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesOverviewEn() {
  return (
    <section className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-gold-700" />
            Our exceptional services at a glance
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-6"></div>
          <p className="max-w-2xl mx-auto text-ink/80 font-light leading-relaxed">
            BE CUTE SPA brings together several wellness experiences in Rabat Agdal to allow you to choose the ritual that suits your desires.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              title: 'Traditional Moroccan Hammam', 
              desc: "Discover our different hammam rituals with black soap, tebrima, scrub, ghassoul and complementary treatments depending on the chosen package." 
            },
            { 
              title: 'Massages', 
              desc: "Enjoy massages offered according to different techniques and durations, including relaxing massage, Swedish massage and back & neck massage." 
            },
            { 
              title: 'Wellness Packages', 
              desc: "Combine several services to enjoy a more complete experience with our packages combining hammam and massage." 
            },
            { 
              title: 'Beauty & Care', 
              desc: "Also discover the skincare and beauty services currently offered by BE CUTE SPA." 
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
            to="/en/services" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-500/10 text-gold-700 border border-sand-300/50 rounded-full hover:bg-gold-500 hover:text-ink transition-colors duration-300 font-medium"
          >
            Discover all our services
          </Link>
        </div>
      </div>
    </section>
  );
}