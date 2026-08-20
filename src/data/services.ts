import { SITE } from '../config/site';

export interface ServiceItem {
  id: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  durationFr: string;
  durationEn: string;
  price: string;
  inclusionsFr: string[];
  inclusionsEn: string[];
}

export interface MassageItem {
  id: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  durations: {
    time: string;
    price: string;
  }[];
}

export interface PackageItem {
  id: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  duration: string;
  price: string;
  inclusionsFr: string[];
  inclusionsEn: string[];
}

export const servicesData = {
  hammam: [
    {
      id: 'hammam-traditionnel',
      nameFr: 'Hammam Traditionnel',
      nameEn: 'Traditional Hammam',
      descriptionFr: 'Un temps de vapeur, de savon noir et de gommage à la fleur d\'oranger pour retrouver une peau douce et l\'esprit plus léger.',
      descriptionEn: 'A ritual of steam, black soap and orange-blossom exfoliation for soft skin and a lighter mind.',
      durationFr: 'Rituel hammam',
      durationEn: 'Hammam Ritual',
      price: '300 DH',
      inclusionsFr: [
        'Set de bain',
        'Savon noir et tebrima',
        'Gommage à la fleur d\'oranger',
        'Shampoing et savonnage'
      ],
      inclusionsEn: [
        'Bath set',
        'Black soap and tebrima',
        'Orange blossom scrub',
        'Shampoo and soaping'
      ]
    },
    {
      id: 'hammam-royale',
      nameFr: 'Hammam Royale',
      nameEn: 'Royal Hammam',
      descriptionFr: 'Le rituel hammam enrichi d\'un enveloppement café–fleur d\'oranger et d\'un masque visage, pour prolonger la pause.',
      descriptionEn: 'An extended hammam ritual with a coffee–orange-blossom wrap and face mask, made for lingering.',
      durationFr: 'Rituel hammam premium',
      durationEn: 'Premium Hammam Ritual',
      price: '400 DH',
      inclusionsFr: [
        'Set de bain',
        'Savon noir et tebrima',
        'Enveloppement détox au café et fleur d\'oranger',
        'Masque visage exfoliant et hydratant',
        'Shampoing et savonnage'
      ],
      inclusionsEn: [
        'Bath set',
        'Black soap and tebrima',
        'Coffee and orange blossom detox wrap',
        'Exfoliating and hydrating face mask',
        'Shampoo and soaping'
      ]
    },
    {
      id: 'hammam-sultan',
      nameFr: 'Hammam Sultan',
      nameEn: 'Sultan Hammam',
      descriptionFr: 'Un rituel généreux qui prolonge le hammam par 30 minutes de massage, entre notes de chocolat et fleur d\'oranger.',
      descriptionEn: 'A generous ritual that extends the hammam with a 30-minute massage, with chocolate and orange-blossom notes.',
      durationFr: 'Avec ½ heure de massage',
      durationEn: 'With ½ hour massage',
      price: '500 DH',
      inclusionsFr: [
        'Set de bain',
        'Savon noir et tebrima',
        'Enveloppement au chocolat et fleur d\'oranger',
        'Gommage et ghassoul aux fleurs d\'oranger',
        'Masque visage',
        '30 minutes de massage',
        'Shampoing et savonnage'
      ],
      inclusionsEn: [
        'Bath set',
        'Black soap and tebrima',
        'Chocolate and orange blossom wrap',
        'Scrub and orange blossom ghassoul',
        'Face mask',
        '30 minutes of massage',
        'Shampoo and soaping'
      ]
    }
  ] as ServiceItem[],
  massages: [
    {
      id: 'massage-relaxant',
      nameFr: 'Massage Relaxant',
      nameEn: 'Relaxing Massage',
      descriptionFr: 'Un massage doux et apaisant pour relâcher les tensions, calmer le corps et retrouver une sensation de détente profonde.',
      descriptionEn: 'A gentle and soothing massage to release tension, calm the body, and rediscover a feeling of deep relaxation.',
      durations: [
        { time: '45 min', price: '300 DH' },
        { time: '60 min', price: '400 DH' }
      ]
    },
    {
      id: 'massage-suedois',
      nameFr: 'Massage Suédois',
      nameEn: 'Swedish Massage',
      descriptionFr: 'Un massage tonique et relaxant à la fois, idéal pour détendre les muscles et améliorer la sensation de bien-être.',
      descriptionEn: 'A massage that is both invigorating and relaxing, ideal for relaxing muscles and improving the feeling of well-being.',
      durations: [
        { time: '45 min', price: '300 DH' },
        { time: '60 min', price: '400 DH' }
      ]
    },
    {
      id: 'massage-dos-nuque',
      nameFr: 'Massage Dos & Nuque',
      nameEn: 'Back & Neck Massage',
      descriptionFr: 'Un soin ciblé pour soulager les tensions du dos, de la nuque et des épaules.',
      descriptionEn: 'A targeted treatment to relieve tension in the back, neck, and shoulders.',
      durations: [
        { time: '45 min', price: '300 DH' }
      ]
    }
  ] as MassageItem[],
  packages: [
    {
      id: 'package-traditionnel-massage',
      nameFr: 'Hammam Traditionnel + Massage',
      nameEn: 'Traditional Hammam + Massage',
      descriptionFr: 'Le hammam Traditionnel, puis le massage relaxant ou suédois de votre choix : deux temps pour dénouer la journée.',
      descriptionEn: 'Traditional Hammam followed by your choice of relaxing or Swedish massage: two unhurried stages to let the day go.',
      duration: '90 min',
      price: '500 DH',
      inclusionsFr: [
        'Hammam Traditionnel complet',
        'Massage relaxant ou suédois'
      ],
      inclusionsEn: [
        'Complete Traditional Hammam',
        'Relaxing or Swedish massage'
      ]
    },
    {
      id: 'package-royale-massage',
      nameFr: 'Hammam Royale + Massage',
      nameEn: 'Royal Hammam + Massage',
      descriptionFr: 'Le Hammam Royale, son enveloppement café–fleur d\'oranger et le massage de votre choix dans une même parenthèse.',
      descriptionEn: 'Royal Hammam, its coffee–orange-blossom wrap, and your choice of massage in one complete escape.',
      duration: '90 min',
      price: '600 DH',
      inclusionsFr: [
        'Hammam Royale complet',
        'Massage relaxant ou suédois'
      ],
      inclusionsEn: [
        'Complete Royal Hammam',
        'Relaxing or Swedish massage'
      ]
    }
  ] as PackageItem[]
};

export function getWhatsAppLink(serviceName: string, isEn: boolean = false) {
  const message = isEn 
    ? `Hello BE CUTE SPA, I would like to book the treatment: ${serviceName}.`
    : `Bonjour BE CUTE SPA, je souhaite réserver le soin : ${serviceName}.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
