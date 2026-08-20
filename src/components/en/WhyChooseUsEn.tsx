import { Sparkles, MapPin, Droplets, HandHeart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: MapPin,
    title: 'In the heart of Agdal',
    description: 'Rue Aguelmane Sidi Ali, Rabat: an easy-to-reach address for an unhurried pause.'
  },
  {
    icon: Droplets,
    title: 'The Moroccan hammam ritual',
    description: 'Black soap, tebrima, exfoliation and ghassoul are listed treatment by treatment, so you know exactly what you are booking.'
  },
  {
    icon: HandHeart,
    title: 'A clear treatment menu',
    description: 'Hammam rituals, relaxing and Swedish massage, back & neck care: durations and prices are shown plainly.'
  },
  {
    icon: HandHeart,
    title: 'Experiences that linger',
    description: 'Signature packages combine a hammam and massage in one visit, from 500 DH.'
  },
  {
    icon: Phone,
    title: 'Book in a few moments',
    description: 'Each treatment opens a pre-filled WhatsApp message; you can also call the spa directly.'
  }
];

export default function WhyChooseUsEn() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-gold-700" />
            Why choose BE CUTE SPA in Rabat Agdal?
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-8"></div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-ink/80 font-light leading-relaxed">
            <p>
              At BE CUTE SPA, the Moroccan hammam meets a massage menu designed around Rabat’s pace. From the start, every appointment is clear: the ritual, what it includes, its duration and its price.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-sand-300/20 shadow-sm flex flex-col items-center text-center hover:border-gold-700/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-700 mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">{feature.title}</h3>
              <p className="text-sm text-ink/75 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/en/spa-rabat" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-500/10 text-gold-700 border border-sand-300/50 rounded-full hover:bg-gold-500 hover:text-ink transition-colors duration-300 font-medium"
          >
            Discover our spa in Rabat
          </Link>
        </div>
      </div>
    </section>
  );
}
