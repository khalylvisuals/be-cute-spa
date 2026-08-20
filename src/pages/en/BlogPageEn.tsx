import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Seo from '../../components/Seo';
import ContactHomeEn from '../../components/en/ContactHomeEn';
import { BLOG_ARTICLES, BLOG_CATEGORIES_EN } from '../../data/blog';
import Image from '../../components/Image';

export default function BlogPageEn() {
  const featuredArticle = BLOG_ARTICLES[0];
  const gridArticles = BLOG_ARTICLES.slice(1);

  return (
    <>
      <Seo 
        lang="en"
        title="Wellness Advice & Inspiration | Blog BE CUTE SPA Rabat"
        description="Discover our advice on Moroccan hammams, massages, wellness, and spa experiences in Rabat Agdal."
        canonicalPath="/en/blog"
        alternatePaths={[{ lang: 'fr', path: '/blog' }]}
      />

      <main className="bg-ivory-50 pt-24 lg:pt-32">
        {/* Blog Hero */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 lg:mb-24 text-center">
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-wide-plus text-gold-500">
            BE CUTE SPA — JOURNAL
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink mb-6">
            Wellness Advice & Inspiration
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-ink/75 font-light leading-relaxed text-balance">
            Discover our advice on Moroccan hammams, massages, wellness, and spa experiences in Rabat Agdal.
          </p>
        </section>

        {/* Featured Article */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 lg:mb-32">
          <Link to={`/en/blog/${featuredArticle.slugEn}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-ui">
                <Image 
                  src={featuredArticle.featuredImage} 
                  alt={featuredArticle.titleEn}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium uppercase tracking-wide text-gold-500 mb-4">
                  {featuredArticle.categoryEn}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6 group-hover:text-gold-700 transition-colors">
                  {featuredArticle.titleEn}
                </h2>
                <p className="text-lg text-ink/75 font-light leading-relaxed mb-8">
                  {featuredArticle.excerptEn}
                </p>
                <div className="flex items-center gap-6 text-sm text-ink/60 mb-8">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readingTime} read
                  </span>
                  <span>
                    {new Date(featuredArticle.datePublished).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <span className="btn-primary inline-flex">
                  Read article
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Categories */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {BLOG_CATEGORIES_EN.map((cat, idx) => (
              <button 
                key={idx}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase rounded-full border transition-colors ${
                  idx === 0 
                    ? 'border-gold-500 bg-gold-500 text-white' 
                    : 'border-sand-300/30 text-ink/70 hover:border-gold-500 hover:text-gold-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Article Grid */}
        <section className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 lg:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {gridArticles.map((post) => (
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
                  
                  <p className="text-ink/75 font-light mb-6 line-clamp-3 flex-grow">
                    {post.excerptEn}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-sand-300/20">
                    <span className="text-sm text-ink/60 font-light flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                    <Link 
                      to={`/en/blog/${post.slugEn}`}
                      className="text-xs font-medium uppercase tracking-wide text-ink group-hover:text-gold-700 transition-colors flex items-center gap-2"
                    >
                      Read article
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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