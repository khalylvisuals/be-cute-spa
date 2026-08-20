import Image from './Image';

export default function AboutContent() {
  return (
    <div className="bg-ivory-50">
      
      {/* Brand Story Section */}
      <section id="brand-story" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-12">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">L'authenticité</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  L'histoire de BE CUTE SPA est profondément ancrée dans la tradition du hammam marocain. Nous avons souhaité créer un lieu qui respecte ce rituel ancestral tout en l'élevant aux standards du bien-être moderne.
                </p>
              </div>
              
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Le bien-être</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  Dans un monde où tout s'accélère, nous offrons un espace pour ralentir. Notre approche du bien-être est globale : elle vise à relâcher les tensions physiques tout en apaisant l'esprit.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Le soin</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  Notre équipe de praticiennes expérimentées accorde une attention particulière à chaque invité. De la pression d'un massage à la température de l'eau, chaque détail est ajusté pour répondre à vos besoins spécifiques.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-gold-600 mb-3">Le cadre</h2>
                <p className="text-ink/80 font-light leading-relaxed">
                  Loin des complexes impersonnels, notre spa à Rabat Agdal a été conçu comme un refuge élégant et intimiste. L'architecture, la lumière tamisée et le silence invitent à une relaxation immédiate.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image 
                src={`${import.meta.env.BASE_URL}images/gallery/gallery-spa-reception.png`}
                alt="Réception élégante de BE CUTE SPA"
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
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">L'Héritage Marocain</h2>
            <p className="text-lg text-ink/75 font-light leading-relaxed">
              Nous sélectionnons avec soin les ingrédients naturels qui font la renommée des rituels de beauté marocains, pour une expérience authentique et respectueuse de votre peau.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Savon Noir", desc: "100% naturel, riche en vitamine E, pour préparer la peau au gommage en douceur." },
              { title: "Tebrima", desc: "Mélange traditionnel de plantes aromatiques pour purifier et parfumer la peau." },
              { title: "Ghassoul", desc: "Argile minérale naturelle des montagnes de l'Atlas aux vertus adoucissantes et nettoyantes." },
              { title: "Fleur d'Oranger", desc: "Utilisée dans nos gommages et enveloppements pour son parfum apaisant et relaxant." }
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
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Chaque détail compte</h2>
            <p className="text-lg text-ivory-100/80 font-light leading-relaxed">
              Découvrez le déroulement d'une visite chez BE CUTE SPA, pensée pour vous offrir une transition en douceur vers la détente.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-ivory-50/10 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
              {[
                { step: "01", title: "Accueil", desc: "Une arrivée en douceur dans notre réception." },
                { step: "02", title: "Préparation", desc: "Un moment pour vous changer dans nos vestiaires intimistes." },
                { step: "03", title: "Rituel", desc: "Le hammam traditionnel pour purifier le corps." },
                { step: "04", title: "Soin", desc: "Le massage professionnel pour relâcher les tensions." },
                { step: "05", title: "Détente", desc: "Le thé à la menthe servi dans notre espace relaxation." }
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
                alt="Thé à la menthe dans l'espace détente de BE CUTE SPA"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-10">Pourquoi choisir BE CUTE SPA ?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Rituels marocains", desc: "Des soins authentiques respectant la tradition du hammam." },
                  { title: "Cadre raffiné", desc: "Un environnement pensé pour ralentir et se détendre." },
                  { title: "Soins variés", desc: "Hammam, massages et formules adaptées à vos envies." },
                  { title: "Attention au confort", desc: "Une hygiène irréprochable et un service personnalisé." },
                  { title: "Femmes & hommes", desc: "Des prestations et espaces adaptés à notre clientèle." },
                  { title: "Réservation simple", desc: "Réservez rapidement par téléphone ou WhatsApp." }
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