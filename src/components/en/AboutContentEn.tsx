import Image from '../Image';

export default function AboutContentEn() {
  return (
    <div className="bg-ivory-50">
      
      {/* Brand Story Section */}
      <section id="brand-story" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-12">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Authenticity</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  The story of BE CUTE SPA is deeply rooted in the Moroccan hammam tradition. We wanted to create a place that respects this ancestral ritual while elevating it to modern wellness standards.
                </p>
              </div>
              
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Wellness</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  In a world where everything is speeding up, we offer a space to slow down. Our approach to wellness is holistic: it aims to release physical tension while soothing the mind.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Care</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  Our team of experienced practitioners pays special attention to each guest. From the pressure of a massage to the temperature of the water, every detail is adjusted to meet your specific needs.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">The Setting</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  Far from impersonal complexes, our spa in Rabat Agdal was designed as an elegant and intimate refuge. The architecture, soft lighting, and silence invite immediate relaxation.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image 
                src={`${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`}
                alt="Elegant reception of BE CUTE SPA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moroccan Identity Section */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">Moroccan Heritage</h2>
            <p className="text-lg text-ink/75 font-light leading-relaxed">
              We carefully select the natural ingredients that make Moroccan beauty rituals famous, for an authentic experience that respects your skin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Black Soap", desc: "100% natural, rich in vitamin E, to gently prepare the skin for exfoliation." },
              { title: "Tebrima", desc: "Traditional blend of aromatic plants to purify and perfume the skin." },
              { title: "Ghassoul", desc: "Natural mineral clay from the Atlas Mountains with softening and cleansing properties." },
              { title: "Orange Blossom", desc: "Used in our scrubs and wraps for its soothing and relaxing scent." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-sand-300/20 text-center hover:border-gold-300/40 transition-colors">
                <div className="w-12 h-12 mx-auto bg-gold-50 rounded-full flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                </div>
                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-sm font-light text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-24 bg-ink text-ivory-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Every Detail Matters</h2>
            <p className="text-lg text-ivory-100/80 font-light leading-relaxed">
              Discover the flow of a visit to BE CUTE SPA, designed to offer you a smooth transition into relaxation.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-ivory-50/10 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
              {[
                { step: "01", title: "Welcome", desc: "A gentle arrival at our reception." },
                { step: "02", title: "Preparation", desc: "A moment to change in our intimate changing rooms." },
                { step: "03", title: "Ritual", desc: "The traditional hammam to purify the body." },
                { step: "04", title: "Treatment", desc: "Professional massage to release tension." },
                { step: "05", title: "Relaxation", desc: "Mint tea served in our relaxation area." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-ink border border-gold-400/30 flex items-center justify-center mb-6 text-gold-400 font-display text-xl shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {item.step}
                  </div>
                  <h3 className="font-medium text-lg text-ivory-50 mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-ivory-100/60 max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BE CUTE Section */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-sm">
              <Image 
                src={`${import.meta.env.BASE_URL}images/gallery/gallery-relaxation-tea.png`}
                alt="Mint tea in the relaxation area of BE CUTE SPA"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-10">Why choose BE CUTE SPA?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Moroccan Rituals", desc: "Authentic treatments respecting the hammam tradition." },
                  { title: "Refined Setting", desc: "An environment designed to slow down and relax." },
                  { title: "Varied Treatments", desc: "Hammam, massages, and packages tailored to your desires." },
                  { title: "Attention to Comfort", desc: "Impeccable hygiene and personalized service." },
                  { title: "Women & Men", desc: "Services and spaces adapted to our clientele." },
                  { title: "Easy Booking", desc: "Book quickly by phone or WhatsApp." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-2">{item.title}</h3>
                    <p className="text-sm text-ink/75 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}