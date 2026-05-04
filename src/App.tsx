import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </div>
  );
}

export default App;
