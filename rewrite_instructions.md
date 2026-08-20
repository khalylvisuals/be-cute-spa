# Rewrite Landing Pages Task

You are an expert SEO copywriter and React developer. We need to expand 6 landing pages to 850-1000 words each of ORIGINAL French prose.

## Rules for each page:
1. **Word Count & Originality**: Minimum 850 words. Max 25% overlap between pages. Do not just reshuffle text; write unique prose for each.
2. **H1**: Unique H1 containing the exact keyword ONCE, written as a human sentence. Do not stack marketing slogans inside H1.
3. **Structure (4-6 H2s)**:
   - What the treatment is / déroulé de la séance (step-by-step).
   - Full price + duration table (HTML table) for THAT service family only.
   - Who it's for / benefits.
   - Practical local info:
     - For City pages (/spa-rabat, /hammam-rabat, /massage-rabat): mention the spa is located in Agdal and is reachable from Hay Riad, Souissi, Hassan, Océan, Les Orangers, Salé. Link down to the Agdal page.
     - For Agdal pages (/spa-rabat-agdal, etc.): must be hyper-local (Gare Rabat-Agdal, Avenue de France, Ryad Square, street).
   - 3-5 real Google reviews quoted verbatim with first name + date.
   - Page-specific FAQ (5 questions) matching real "People also ask".
4. **Internal Linking**: Every page must link to: the sibling city/agdal page, `/tarifs`, and `/contact` with descriptive anchor text (never "cliquez ici").
5. **Technical**: Keep the existing React component structure, imports (`Seo`, `BookingForm`, `Contact`, `Image`), and `Seo` props exactly as they are. Just expand the JSX content inside `<main>`.
6. **Images**: Use a distinct hero image from `public/images/services/` or `public/images/gallery/` for each page.

## Pages to rewrite:
- src/pages/landing/SpaRabat.tsx
- src/pages/landing/SpaRabatAgdal.tsx
- src/pages/landing/HammamRabat.tsx
- src/pages/landing/HammamRabatAgdal.tsx
- src/pages/landing/MassageRabat.tsx
- src/pages/landing/MassageRabatAgdal.tsx

Please rewrite the specific file requested in your prompt according to these rules.