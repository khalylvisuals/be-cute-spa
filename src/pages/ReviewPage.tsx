import { SITE } from '../config/site';
import { QRCodeSVG } from 'qrcode.react';
import Seo from '../components/Seo';

export default function ReviewPage() {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ! Merci de votre visite chez BE CUTE SPA. Nous espérons que votre soin a été relaxant.\n\n` +
    `Si vous avez apprécié votre expérience, n'hésitez pas à nous soutenir en laissant un avis sur Google en cliquant sur ce lien :\n` +
    `${SITE.gbpUrl}\n\n` +
    `À très bientôt !`
  );

  return (
    <>
      <Seo 
        title="Laisser un avis | BE CUTE SPA"
        description="Merci de votre visite chez BE CUTE SPA. Laissez-nous un avis sur Google."
        canonicalPath="/avis"
        noindex={true}
      />
      
      <main className="min-h-screen bg-ivory-50 pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-6">
          <div className="bg-cream-100 border border-sand-300/20 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <h1 className="text-3xl text-gold-700 mb-2 font-extralight tracking-widest uppercase">
              Merci de votre visite
            </h1>
            
            <p className="text-ink/80 font-light mb-8 text-sm">
              Scannez le QR code ci-dessous pour laisser un avis sur Google. Votre soutien est précieux.
            </p>

            {/* QR Code Container */}
            <div className="bg-white p-6 rounded-2xl inline-block mb-8 shadow-[0_0_40px_rgba(212,175,106,0.15)]">
              {SITE.gbpUrl ? (
                <QRCodeSVG 
                  value={SITE.gbpUrl} 
                  size={200}
                  level="H"
                  fgColor="#2B0206" // maroon-900 color for the QR code itself
                  imageSettings={{
                    src: `${import.meta.env.BASE_URL}logo.png`,
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />
              ) : (
                <div className="w-[200px] h-[200px] flex items-center justify-center text-ink font-medium">
                  Lien Google non configuré
                </div>
              )}
            </div>

            <div className="space-y-4">
              <a 
                href={SITE.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 bg-gold-500 text-ink font-medium uppercase tracking-widest text-xs rounded-full hover:bg-sand-300 transition-colors"
              >
                Lien direct Google
              </a>
              
              <a 
                href={`whatsapp://send?text=${whatsappMessage}`}
                data-action="share/whatsapp/share"
                className="block w-full py-4 px-6 bg-transparent border border-sand-300 text-gold-700 font-medium uppercase tracking-widest text-xs rounded-full hover:bg-gold-500/10 transition-colors"
              >
                Envoyer le lien par WhatsApp
              </a>
            </div>
            
            <p className="mt-8 text-xs text-ink/75 font-light uppercase tracking-widest">
              Réservé à l'équipe BE CUTE SPA
            </p>
          </div>
        </div>
      </main>
    </>
  );
}