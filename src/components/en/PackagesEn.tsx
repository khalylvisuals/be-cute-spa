import SectionHeader from '../SectionHeader';
import { servicesData, getWhatsAppLink } from '../../data/services';

export default function PackagesEn() {
  const packages = servicesData.packages.map((p, index) => ({
    number: `0${index + 1}`,
    title: p.nameEn,
    description: p.descriptionEn,
    duration: p.duration,
    price: p.price,
    inclusions: p.inclusionsEn,
  }));
  return (
    <section id="packages" className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          kicker="Our packages"
          title="Wellness Packages"
          subtitle="Combine hammam and massage for a complete experience, designed to relax the body and soothe the mind."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.number}
              className="group relative flex flex-col overflow-hidden border border-sand-300/20 bg-ivory-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-sand-300/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.15)] sm:p-8 lg:p-10 rounded-ui"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-gold-500/5 blur-3xl transition-colors duration-500 group-hover:bg-gold-500/10" />

              {/* Number */}
              <span className="pointer-events-none absolute right-2 top-0 select-none text-9xl font-bold leading-none tracking-[0.04em] text-gold-500/10 z-0">
                {pkg.number}
              </span>

              <div className="relative z-10 flex flex-col flex-grow">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-wide-plus text-gold-700">
                  Package
                </p>

                <h3 className="mb-5 max-w-[80%] text-xl font-medium uppercase tracking-wide-plus text-ink sm:text-2xl text-balance">
                  {pkg.title}
                </h3>

                <p className="mb-7 text-body font-light leading-relaxed text-ink/75">
                  {pkg.description}
                </p>

                <div className="mt-auto">
                  <div className="mb-7 space-y-3 border-y border-sand-300/15 py-5">
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-medium uppercase tracking-wide-plus text-ink/75">
                        Duration
                      </span>
                      <span className="text-sm font-medium uppercase tracking-wide-plus text-ink">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-medium uppercase tracking-wide-plus text-ink/75">Price</span>
                      <span className="text-lg font-medium text-gold-700">{pkg.price}</span>
                    </div>
                  </div>

                  <ul className="mb-7 space-y-2 text-sm font-light text-ink/75">
                    {pkg.inclusions.map((item) => <li key={item}>• {item}</li>)}
                  </ul>

                  <a
                    href={getWhatsAppLink(pkg.title, true)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full"
                  >
                    Book this package
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
