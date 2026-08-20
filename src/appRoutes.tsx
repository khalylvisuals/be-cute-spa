import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TarifsPage from './pages/TarifsPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import SpaRabatPage from './pages/SpaRabatPage';
import HomePageEn from './pages/en/HomePageEn';
import AboutPageEn from './pages/en/AboutPageEn';
import ServicesPageEn from './pages/en/ServicesPageEn';
import ContactPageEn from './pages/en/ContactPageEn';
import PrivacyPolicyPageEn from './pages/en/PrivacyPolicyPageEn';
import TarifsPageEn from './pages/en/TarifsPageEn';
import BlogPageEn from './pages/en/BlogPageEn';
import BlogPostEn from './pages/en/blog/BlogPostEn';
import GalleryPageEn from './pages/en/GalleryPageEn';
import SpaRabatPageEn from './pages/en/SpaRabatPageEn';
import StaffReviewRoute from './components/StaffReviewRoute';

export const routes = [{
  path: '/', element: <App />, children: [
    { index: true, element: <HomePage /> },
    { path: 'a-propos', element: <AboutPage /> },
    { path: 'services', element: <ServicesPage /> },
    { path: 'tarifs', element: <TarifsPage /> },
    { path: 'galerie', element: <GalleryPage /> },
    { path: 'blog', element: <BlogPage /> },
    { path: 'blog/:slug', element: <BlogPost /> },
    { path: 'contact', element: <ContactPage /> },
    { path: 'mentions-legales', element: <PrivacyPolicyPage /> },
    { path: 'spa-rabat', element: <SpaRabatPage /> },
    { path: 'avis', element: <StaffReviewRoute /> },
    { path: 'en', children: [
      { index: true, element: <HomePageEn /> },
      { path: 'about', element: <AboutPageEn /> },
      { path: 'services', element: <ServicesPageEn /> },
      { path: 'pricing', element: <TarifsPageEn /> },
      { path: 'gallery', element: <GalleryPageEn /> },
      { path: 'blog', element: <BlogPageEn /> },
      { path: 'blog/:slug', element: <BlogPostEn /> },
      { path: 'contact', element: <ContactPageEn /> },
      { path: 'legal', element: <PrivacyPolicyPageEn /> },
      { path: 'spa-rabat', element: <SpaRabatPageEn /> },
      { path: '*', element: <NotFoundPage /> }
    ] },
    { path: '404', element: <NotFoundPage /> },
    { path: '*', element: <NotFoundPage /> }
  ]
}];
