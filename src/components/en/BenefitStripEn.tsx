import { Droplets, HandHeart, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Droplets,
    title: 'Traditional Moroccan Hammam',
    description: 'Rituals inspired by Moroccan traditions',
  },
  {
    icon: HandHeart,
    title: 'Massages & Relaxation',
    description: 'Multiple treatments and durations available',
  },
  {
    icon: Sparkles,
    title: 'Wellness Packages',
    description: 'Hammam, massage and combined experiences',
  },
];

export default function BenefitStripEn() {
  return (
    <section id="benefits" className="border-y border-sand-300/20 bg-ivory-50">
      <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-sand-300/20 sm:grid-cols-3 border-x border-transparent sm:border-sand-300/20">
            {benefits.map((benefit, index) => (
              <div key={index} className="group px-6 py-8 text-center transition-colors duration-300 bg-ivory-50 hover:bg-cream-100/60 lg:px-8 flex flex-col items-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-300/35 transition-all duration-300 group-hover:border-sand-300 group-hover:bg-gold-500/10">
                    <benefit.icon className="h-4 w-4 text-gold-700" />
                  </div>
                </div>

                <h2 className="mb-2 text-sm font-medium uppercase tracking-wide-plus text-ink">
                  {benefit.title}
                </h2>

                <p className="text-xs font-light leading-relaxed text-ink/75">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
