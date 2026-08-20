import { Link } from 'react-router-dom';

export const contentFr = (
  <>
    <p>
      Le choix d'un spa est une décision intime : c'est un lieu où vous confiez votre corps et votre bien-être. À Rabat, et plus particulièrement dans le quartier dynamique de l'Agdal, les offres se multiplient. Voici les critères essentiels pour choisir le spa qui répondra parfaitement à vos attentes de détente.
    </p>

    <h2>1. L'hygiène et la propreté irréprochables</h2>
    <p>
      C'est le critère non négociable. Un bon spa doit faire preuve d'une propreté clinique, de la réception jusqu'aux cabines de massage et aux salles de hammam. Les serviettes doivent être immaculées, le matériel désinfecté et l'odeur ambiante doit respirer le frais. Chez BE CUTE SPA, nous mettons un point d'honneur à maintenir une hygiène rigoureuse pour votre sérénité.
    </p>

    <h2>2. L'ambiance et l'environnement sonore</h2>
    <p>
      Dès que vous franchissez la porte, vous devez ressentir une déconnexion avec l'agitation de la rue (surtout dans un quartier comme Rabat Agdal). L'éclairage tamisé, la musique douce, et une décoration soignée (comme nos tons ivoire, bois et or) participent à conditionner votre esprit à la relaxation avant même le début du soin.
    </p>

    <h2>3. La transparence des tarifs</h2>
    <p>
      Un établissement sérieux affiche clairement ses <Link to="/tarifs">prix et la durée exacte de ses soins</Link>. Méfiez-vous des offres floues. Vous devez savoir à l'avance ce que comprend votre rituel (savon noir, gommage, enveloppement) et combien de temps il durera.
    </p>

    <div className="bg-white p-8 rounded-2xl border border-sand-300/20 my-12 text-center shadow-sm">
      <h3 className="text-xl text-ink mb-4">Découvrez nos installations</h3>
      <p className="mb-6 text-ink/75">
        Visitez virtuellement notre espace détente, nos salles de massage et notre hammam traditionnel.
      </p>
      <Link to="/galerie" className="btn-secondary">
        Voir la galerie photo
      </Link>
    </div>

    <h2>4. La qualité de l'accueil et du personnel</h2>
    <p>
      L'équipe doit être chaleureuse, discrète et à l'écoute. Avant un massage, les praticiennes professionnelles doivent s'enquérir de vos préférences (pression forte ou douce) et d'éventuelles zones de tension.
    </p>

    <h2>5. Les avis clients authentiques</h2>
    <p>
      Aujourd'hui, la preuve sociale est indispensable. Consultez les avis Google pour évaluer la régularité de l'établissement. BE CUTE SPA est fier de maintenir une note de 4,3/5 grâce aux retours de ses clients réguliers à Rabat.
    </p>

    <h2>6. La facilité de réservation</h2>
    <p>
      Un spa premium moderne doit faciliter votre parcours. C'est pourquoi nous avons mis en place une réservation directe et sans friction via WhatsApp, vous permettant de vérifier nos disponibilités instantanément.
    </p>

    <p>
      Prêt(e) à faire le bon choix ? Nous serons ravis de vous accueillir au cœur de l'Agdal pour une parenthèse hors du temps.
    </p>
  </>
);

export const contentEn = (
  <>
    <p>
      Choosing a spa is an intimate decision: it is a place where you entrust your body and your well-being. In Rabat, and more specifically in the dynamic Agdal district, offers are multiplying. Here are the essential criteria for choosing the spa that will perfectly meet your relaxation expectations.
    </p>

    <h2>1. Flawless hygiene and cleanliness</h2>
    <p>
      This is the non-negotiable criterion. A good spa must demonstrate clinical cleanliness, from the reception to the massage cabins and hammam rooms. Towels must be immaculate, equipment disinfected, and the ambient smell must breathe freshness. At BE CUTE SPA, we make it a point of honor to maintain rigorous hygiene for your peace of mind.
    </p>

    <h2>2. Atmosphere and sound environment</h2>
    <p>
      As soon as you walk through the door, you must feel a disconnection from the hustle and bustle of the street (especially in a neighborhood like Rabat Agdal). Dim lighting, soft music, and careful decoration (like our ivory, wood, and gold tones) help condition your mind for relaxation even before the treatment begins.
    </p>

    <h2>3. Price transparency</h2>
    <p>
      A serious establishment clearly displays its <Link to="/en/pricing">prices and the exact duration of its treatments</Link>. Beware of vague offers. You should know in advance what your ritual includes (black soap, scrub, wrap) and how long it will last.
    </p>

    <div className="bg-white p-8 rounded-2xl border border-sand-300/20 my-12 text-center shadow-sm">
      <h3 className="text-xl text-ink mb-4">Discover our facilities</h3>
      <p className="mb-6 text-ink/75">
        Take a virtual tour of our relaxation area, our massage rooms, and our traditional hammam.
      </p>
      <Link to="/en/gallery" className="btn-secondary">
        View the photo gallery
      </Link>
    </div>

    <h2>4. Quality of reception and staff</h2>
    <p>
      The team must be warm, discreet, and attentive. Before a massage, professional practitioners should inquire about your preferences (strong or soft pressure) and any areas of tension.
    </p>

    <h2>5. Authentic customer reviews</h2>
    <p>
      Today, social proof is essential. Check Google reviews to evaluate the consistency of the establishment. BE CUTE SPA is proud to maintain a 4.3/5 rating thanks to feedback from its regular customers in Rabat.
    </p>

    <h2>6. Ease of booking</h2>
    <p>
      A modern premium spa must facilitate your journey. This is why we have implemented direct and frictionless booking via WhatsApp, allowing you to check our availability instantly.
    </p>

    <p>
      Ready to make the right choice? We would be delighted to welcome you in the heart of Agdal for a timeless interlude.
    </p>
  </>
);
