import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { SITE } from '../config/site';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Introuvable | {SITE.name}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-6xl font-light text-maroon-900 md:text-8xl">404</h1>
        <h2 className="mb-8 text-2xl font-light tracking-wide text-ink md:text-3xl">Page Introuvable</h2>
        <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-ink/80">
          La page que vous recherchez semble avoir été déplacée ou n'existe plus.
        </p>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </section>
    </>
  );
}