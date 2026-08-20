import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-100 text-ink font-light flex flex-col pb-[env(safe-area-inset-bottom)] md:pb-0">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </div>
    </>
  );
}

export default App;
