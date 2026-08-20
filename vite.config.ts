import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { BLOG_ARTICLES } from './src/data/blog';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  // @ts-expect-error vite-react-ssg types might be incomplete
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes(paths: string[]) {
      const dynamicRoutes = BLOG_ARTICLES.flatMap(article => [
        `/blog/${article.slugFr}`,
        `/en/blog/${article.slugEn}`
      ]);
      return [...paths, ...dynamicRoutes];
    }
  }
});
