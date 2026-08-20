import { Head } from 'vite-react-ssg';
import { SITE } from '../config/site';
import { generateWebSiteJsonLd, generateOrganizationJsonLd } from '../utils/jsonLd';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
  preloadImage?: string;
  lang?: string;
  alternatePaths?: { lang: string, path: string }[];
}

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage = `${SITE.origin}/logo.png`,
  jsonLd = [],
  noindex = false,
  preloadImage,
  lang = 'fr',
  alternatePaths = [],
}: SeoProps) {
  const normalizedCanonicalPath = canonicalPath.length > 1 && canonicalPath.endsWith('/')
    ? canonicalPath.slice(0, -1)
    : canonicalPath;
  const isHomePage = normalizedCanonicalPath === '/' || normalizedCanonicalPath === '/en';
  const canonicalUrl = normalizedCanonicalPath === '/' ? `${SITE.origin}/` : `${SITE.origin}${normalizedCanonicalPath}/`;

  const baseJsonLd = [
    generateWebSiteJsonLd(),
    generateOrganizationJsonLd(),
    ...jsonLd
  ];

  // For non-home pages, explicitly reference the local business entity
  if (!isHomePage) {
    const hasBusinessReference = baseJsonLd.some(item => item['@id'] === `${SITE.origin}/#business`);
    if (!hasBusinessReference) {
      baseJsonLd.push({ "@id": `${SITE.origin}/#business` });
    }
  }

  const alternateLinks = alternatePaths.length > 0
    ? [
        <link key="self" rel="alternate" hrefLang={lang === 'fr' ? 'fr-MA' : 'en'} href={canonicalUrl} />,
        ...alternatePaths.map((alt) => (
          <link
            key={alt.lang}
            rel="alternate"
            hrefLang={alt.lang === 'fr' ? 'fr-MA' : 'en'}
            href={alt.path === '/' ? `${SITE.origin}/` : `${SITE.origin}${alt.path}/`}
          />
        )),
        <link
          key="default"
          rel="alternate"
          hrefLang="x-default"
          href={lang === 'fr'
            ? canonicalUrl
            : (() => {
                const frPath = alternatePaths.find(a => a.lang === 'fr')?.path;
                return frPath ? (frPath === '/' ? `${SITE.origin}/` : `${SITE.origin}${frPath}/`) : canonicalUrl;
              })()}
        />
      ]
    : [];

  return (
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#F6E8DA" />
      <link rel="canonical" href={canonicalUrl} />
      
      {alternateLinks}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_MA' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Indexing */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Preload Hero Image (AVIF for best performance) */}
      {preloadImage && (
        <link 
          rel="preload" 
          as="image" 
          href={`${preloadImage.replace(/\.(png|jpe?g)$/, '')}-1600.avif`}
          type="image/avif" 
          imageSrcSet={`${preloadImage.replace(/\.(png|jpe?g)$/, '')}-480.avif 480w, ${preloadImage.replace(/\.(png|jpe?g)$/, '')}-960.avif 960w, ${preloadImage.replace(/\.(png|jpe?g)$/, '')}-1600.avif 1600w`}
          imageSizes="(max-width: 640px) 480px, (max-width: 1024px) 960px, 1600px"
        />
      )}

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": baseJsonLd
        })}
      </script>
    </Head>
  );
}
