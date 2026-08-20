import { useParams, Navigate, Link } from 'react-router-dom';
import Seo from '../../../components/Seo';
import { getArticleBySlug, getRelatedArticles } from '../../../data/blog';
import { SITE } from '../../../config/site';
import Image from '../../../components/Image';
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '../../../utils/jsonLd';
import { ArrowRight, Clock } from 'lucide-react';
import ContactHomeEn from '../../../components/en/ContactHomeEn';

// Import article contents directly (for the first 3 strategic articles)
import { contentEn as contentPrixHammam } from '../../../data/articles/prix-hammam-massage-rabat';
import { contentEn as contentBienfaitsHammam } from '../../../data/articles/bienfaits-hammam-marocain';
import { contentEn as contentMeilleurSpa } from '../../../data/articles/meilleur-spa-rabat-comment-choisir';

const articleContents: Record<string, JSX.Element> = {
  'hammam-massage-prices-rabat': contentPrixHammam,
  'moroccan-hammam-benefits': contentBienfaitsHammam,
  'best-spa-rabat-how-to-choose': contentMeilleurSpa
};

export default function BlogPostEn() {
  const { slug } = useParams();
  
  if (!slug) return <Navigate to="/en/blog" replace />;
  
  const article = getArticleBySlug(slug, 'en');
  
  if (!article || !articleContents[slug]) {
    return <Navigate to="/en/blog" replace />;
  }

  const content = articleContents[slug];
  const relatedArticles = getRelatedArticles(article.id, 3);

  const articleJsonLd = generateArticleJsonLd(article, 'en');
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", item: "/en" },
    { name: "Blog", item: "/en/blog/" },
    { name: article.titleEn }
  ]);

  return (
    <>
      <Seo 
        lang="en"
        title={article.seoTitleEn}
        description={article.metaDescEn}
        canonicalPath={`/en/blog/${article.slugEn}`}
        alternatePaths={[{ lang: 'fr', path: `/blog/${article.slugFr}` }]}
        ogImage={`${SITE.origin}${article.featuredImage}`}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <main className="bg-ivory-50 pt-24 lg:pt-32">
        {/* Article Hero */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12 text-center">
          <Link to="/en/blog" className="text-xs font-medium uppercase tracking-wide text-gold-500 mb-6 hover:text-gold-700 transition-colors inline-block">
            ← Back to journal
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-wide text-ink/60 mb-6">
            <span>{article.categoryEn}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readingTime}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink mb-8 leading-tight">
            {article.titleEn}
          </h1>
          <p className="text-xl text-ink/75 font-light leading-relaxed text-balance">
            {article.excerptEn}
          </p>
        </section>

        {/* Featured Image */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 lg:mb-24">
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-ui">
            <Image 
              src={article.featuredImage} 
              alt={article.titleEn} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-[70ch] mx-auto mb-24 lg:mb-32 prose prose-lg prose-headings:font-display prose-headings:text-ink prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-p:text-ink/80 prose-p:font-light prose-p:leading-relaxed prose-a:text-gold-600 hover:prose-a:text-gold-700 prose-a:transition-colors prose-li:text-ink/80 prose-li:font-light prose-strong:font-medium prose-strong:text-ink">
          {content}
        </section>

        {/* Related Articles */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 lg:pb-32 border-t border-sand-300/20 pt-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">You might also like</h2>
            <p className="text-ink/70 font-light">Discover other articles about wellness and our rituals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <Link to={`/en/blog/${post.slugEn}`} className="block relative aspect-[4/3] overflow-hidden rounded-ui mb-6">
                  <Image 
                    src={post.featuredImage} 
                    alt={post.titleEn}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <span className="text-xs font-medium uppercase tracking-wide text-gold-500 mb-3">
                    {post.categoryEn}
                  </span>
                  <h3 className="font-display text-2xl text-ink mb-4 group-hover:text-gold-700 transition-colors line-clamp-2">
                    <Link to={`/en/blog/${post.slugEn}`}>
                      {post.titleEn}
                    </Link>
                  </h3>
                  <Link 
                    to={`/en/blog/${post.slugEn}`}
                    className="text-xs font-medium uppercase tracking-wide text-ink group-hover:text-gold-700 transition-colors flex items-center gap-2 mt-auto pt-4"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactHomeEn />
      </main>
    </>
  );
}
