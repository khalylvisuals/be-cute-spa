import Header from './components/Header';
import Hero from './components/Hero';
import BenefitStrip from './components/BenefitStrip';
import ServicesGrid from './components/ServicesGrid';
import AboutExperience from './components/AboutExperience';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-wine text-ivory font-light">
      <Header />

      <main>
        <Hero />
        <BenefitStrip />
        <ServicesGrid />
        <AboutExperience />
        <Packages />
        <Gallery />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
