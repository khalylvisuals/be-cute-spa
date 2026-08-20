import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

const replaceInFile = (filePath, searchRegex, replaceFunc) => {
  const fullPath = path.join(root, filePath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf-8');
  let original = content;
  content = content.replace(searchRegex, replaceFunc);
  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
};

// 1. src/pages/HomePage.tsx
replaceInFile('src/pages/HomePage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="Spa Rabat Agdal | Hammam & Massage | BE CUTE SPA"
        description="Spa à Rabat Agdal : hammam marocain traditionnel, massage relaxant et packs bien-être dès 300 DH. Ouvert 7j/7 jusqu'à 23h. Réservez sur WhatsApp au 05 37 68 24 27."
        canonicalPath="/"
      />`
);
replaceInFile('src/pages/HomePage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

// 2. src/pages/AboutPage.tsx
replaceInFile('src/pages/AboutPage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="À propos | Spa & Hammam à Rabat Agdal | BE CUTE SPA"
        description="BE CUTE SPA, plus de 5 ans de bien-être à Rabat Agdal : 171 avis Google, 4,3/5. Cabines privées, hammam traditionnel et équipe de praticiennes expérimentées."
        canonicalPath="/a-propos"
      />`
);
replaceInFile('src/pages/AboutPage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

// 3. src/pages/ServicesPage.tsx
replaceInFile('src/pages/ServicesPage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="Nos Soins : Hammam & Massage à Rabat | BE CUTE SPA"
        description="Découvrez nos hammams marocains (traditionnel, royale, sultan) et nos massages relaxant, suédois et dos & nuque à Rabat Agdal. Durées, tarifs et réservation WhatsApp."
        canonicalPath="/services"
      />`
);
replaceInFile('src/pages/ServicesPage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

// 4. src/pages/ContactPage.tsx
replaceInFile('src/pages/ContactPage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="Contact & Réservation | Spa Rabat Agdal | BE CUTE SPA"
        description="BE CUTE SPA, Rue Aguelmane Sidi Ali, Agdal, Rabat 10000. Tél 05 37 68 24 27, WhatsApp +212 666 948 022. Ouvert 7j/7 de 10h à 23h. Itinéraire Google Maps."
        canonicalPath="/contact"
      />`
);
replaceInFile('src/pages/ContactPage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

// 5. src/pages/BlogPage.tsx
replaceInFile('src/pages/BlogPage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="Blog Bien-être : Hammam, Massage & Beauté | BE CUTE SPA"
        description="Conseils bien-être de notre spa à Rabat : bienfaits du hammam marocain, choisir son massage, rituels au savon noir, ghassoul et huile d'argan."
        canonicalPath="/blog"
      />`
);
replaceInFile('src/pages/BlogPage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

// 6. src/pages/PrivacyPolicyPage.tsx
replaceInFile('src/pages/PrivacyPolicyPage.tsx', 
  /<Helmet>[\s\S]*?<\/Helmet>/, 
  () => `<Seo 
        title="Mentions Légales & Politique de Confidentialité | BE CUTE SPA"
        description="Consultez les mentions légales et la politique de confidentialité de BE CUTE SPA."
        canonicalPath="/mentions-legales"
      />`
);
replaceInFile('src/pages/PrivacyPolicyPage.tsx', 
  /import { Helmet } from 'react-helmet-async';/, 
  () => `import Seo from '../components/Seo';`
);

console.log('Phase 1 meta replacements complete.');
