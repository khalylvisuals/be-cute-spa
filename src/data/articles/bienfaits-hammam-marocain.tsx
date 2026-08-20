import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../services';

export const contentFr = (
  <>
    <p>
      Le hammam marocain est bien plus qu'un simple soin esthétique : c'est un véritable rituel de purification du corps et de l'esprit, ancré dans la tradition orientale. Si vous cherchez un moment de détente absolue à Rabat Agdal, comprendre les bienfaits du hammam vous aidera à apprécier pleinement cette expérience.
    </p>

    <h2>1. Une purification profonde de la peau</h2>
    <p>
      L'association de la vapeur chaude, du savon noir naturel et de l'exfoliation au gant kessa permet d'éliminer les cellules mortes en profondeur. Ce processus stimule le renouvellement cellulaire, laissant votre peau incroyablement douce, lumineuse et purifiée de ses toxines.
    </p>

    <h2>2. La détente musculaire et articulaire</h2>
    <p>
      La chaleur du hammam (généralement entre 40 et 50°C) agit comme un décontractant naturel puissant. Elle favorise la dilatation des vaisseaux sanguins et aide à relâcher les tensions musculaires accumulées. C'est l'étape de préparation idéale avant de recevoir un <Link to="/services">massage relaxant</Link>.
    </p>

    <h2>3. L'évacuation du stress et de l'anxiété</h2>
    <p>
      L'atmosphère silencieuse, la pénombre et la chaleur enveloppante du hammam créent un cocon apaisant. Ce temps de pause loin des écrans permet de libérer des endorphines (les hormones du bonheur) et de réduire considérablement le niveau de stress.
    </p>

    <div className="bg-white p-8 rounded-2xl border border-sand-300/20 my-12 text-center shadow-sm">
      <h3 className="text-xl text-ink mb-4">L'expérience BE CUTE SPA</h3>
      <p className="mb-6 text-ink/75">
        Notre Hammam Traditionnel (300 DH) inclut le savonnage au savon noir et l'exfoliation complète.
      </p>
      <a 
        href={getWhatsAppLink('Hammam Traditionnel', false)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Réserver ce rituel
      </a>
    </div>

    <h2>4. L'amélioration de la circulation sanguine</h2>
    <p>
      L'effet vasodilatateur de la chaleur stimule la circulation sanguine, favorisant ainsi une meilleure oxygénation des organes et des tissus. Pour maximiser cet effet, il est conseillé de terminer son rituel par un léger rinçage à l'eau fraîche.
    </p>

    <h2>5. Dégagement des voies respiratoires</h2>
    <p>
      L'humidité ambiante, souvent enrichie aux vapeurs d'eucalyptus, est excellente pour dégager les voies respiratoires. Les personnes souffrant de rhumes légers ou d'allergies trouvent souvent un réel soulagement après une séance de vapeur.
    </p>

    <p>
      Pour prolonger ces bienfaits, nous recommandons de coupler votre séance de hammam avec un massage ou un enveloppement au ghassoul, comme proposé dans nos différents <Link to="/tarifs">forfaits bien-être</Link>.
    </p>
  </>
);

export const contentEn = (
  <>
    <p>
      The Moroccan hammam is much more than just a beauty treatment: it is a true ritual of purification for the body and mind, rooted in oriental tradition. If you are looking for a moment of absolute relaxation in Rabat Agdal, understanding the benefits of the hammam will help you fully appreciate this experience.
    </p>

    <h2>1. Deep skin purification</h2>
    <p>
      The combination of hot steam, natural black soap, and exfoliation with a kessa glove removes dead cells deeply. This process stimulates cellular renewal, leaving your skin incredibly soft, luminous, and purified of its toxins.
    </p>

    <h2>2. Muscle and joint relaxation</h2>
    <p>
      The heat of the hammam (usually between 40 and 50°C) acts as a powerful natural muscle relaxant. It promotes blood vessel dilation and helps release accumulated muscle tension. This is the ideal preparation step before receiving a <Link to="/en/services">relaxing massage</Link>.
    </p>

    <h2>3. Stress and anxiety relief</h2>
    <p>
      The quiet atmosphere, dim lighting, and enveloping heat of the hammam create a soothing cocoon. This break away from screens allows the release of endorphins (happiness hormones) and significantly reduces stress levels.
    </p>

    <div className="bg-white p-8 rounded-2xl border border-sand-300/20 my-12 text-center shadow-sm">
      <h3 className="text-xl text-ink mb-4">The BE CUTE SPA Experience</h3>
      <p className="mb-6 text-ink/75">
        Our Traditional Hammam (300 DH) includes black soap application and complete exfoliation.
      </p>
      <a 
        href={getWhatsAppLink('Traditional Hammam', true)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Book this ritual
      </a>
    </div>

    <h2>4. Improved blood circulation</h2>
    <p>
      The vasodilatory effect of the heat stimulates blood circulation, thus promoting better oxygenation of organs and tissues. To maximize this effect, it is advisable to finish your ritual with a light rinse of cool water.
    </p>

    <h2>5. Clearing of the respiratory tract</h2>
    <p>
      The ambient humidity, often enriched with eucalyptus vapors, is excellent for clearing the respiratory tract. People suffering from mild colds or allergies often find real relief after a steam session.
    </p>

    <p>
      To prolong these benefits, we recommend pairing your hammam session with a massage or a ghassoul body wrap, as offered in our various <Link to="/en/pricing">wellness packages</Link>.
    </p>
  </>
);