import { Droplets, HandHeart, Sparkles, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Droplets,
    title: 'Hammams',
    description: 'À partir de 300 DH',
  },
  {
    icon: HandHeart,
    title: 'Massages',
    description: '45 min à partir de 300 DH',
  },
  {
    icon: Sparkles,
    title: 'Packs bien-être',
    description: 'Hammam + massage dès 500 DH',
  },
  {
    icon: Phone,
    title: 'Réservation simple',
    description: 'Par téléphone ou WhatsApp',
  },
];

export default function BenefitStrip() {
  return (
    <section id="benefits" className="border-y border-gold/20 bg-dark-burgundy">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-gold/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group px-6 py-8 text-center transition-colors duration-300 hover:bg-deep-wine/40 lg:px-8"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <benefit.icon className="h-4 w-4 text-gold" />
                </div>
              </div>

              <h3 className="mb-2 text-sm font-light uppercase tracking-[0.2em] text-ivory">
                {benefit.title}
              </h3>

              <p className="text-xs font-light leading-relaxed text-ivory/60">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}