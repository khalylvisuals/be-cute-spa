import { Sparkles, MapPin, Droplets, HandHeart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: MapPin,
    title: 'Au cœur d’Agdal',
    description: 'Rue Aguelmane Sidi Ali, à Rabat : une adresse simple à rejoindre pour s’accorder une vraie pause.'
  },
  {
    icon: Droplets,
    title: 'Le geste du hammam marocain',
    description: 'Savon noir, tebrima, gommage et ghassoul sont détaillés soin par soin, pour savoir exactement ce que vous réservez.'
  },
  {
    icon: HandHeart,
    title: 'Une carte lisible',
    description: 'Rituels hammam, massages relaxant ou suédois, soin dos & nuque : durées et prix sont affichés sans surprise.'
  },
  {
    icon: HandHeart,
    title: 'Des expériences qui se prolongent',
    description: 'Les formules Signature réunissent hammam et massage dans un même rendez-vous, à partir de 500 DH.'
  },
  {
    icon: Phone,
    title: 'Réserver en quelques instants',
    description: 'Chaque soin ouvre un message WhatsApp prérempli ; vous pouvez aussi appeler directement le spa.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-gold-700" />
            Pourquoi choisir BE CUTE SPA à Rabat Agdal ?
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60 mb-8"></div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-ink/80 font-light leading-relaxed">
            <p>
              À BE CUTE SPA, le hammam marocain rencontre une carte de massages pensée pour les rythmes de Rabat. Chaque rendez-vous est clair dès le départ : le rituel, ce qu’il comprend, sa durée et son prix.
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
            to="/spa-rabat" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-500/10 text-gold-700 border border-sand-300/50 rounded-full hover:bg-gold-500 hover:text-ink transition-colors duration-300 font-medium"
          >
            Découvrir notre spa à Rabat
          </Link>
        </div>
      </div>
    </section>
  );
}
