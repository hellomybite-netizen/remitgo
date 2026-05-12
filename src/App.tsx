import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SectionCta from './components/SectionCta';
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
      <SectionCta
        text="Mau kirim lebih banyak, bayar lebih sedikit?"
        sub="Download sekarang dan rasakan perbedaannya."
      />
      <HowItWorks />
      <SectionCta
        text="Cuma 3 langkah — dan uang langsung meluncur ke Indonesia."
        sub="Gratis download. Gratis daftar. Mulai kirim hari ini."
      />
      <Trust />
      <Testimonials />
      <SectionCta
        text="Bergabung bersama 50.000+ PMI yang sudah lebih hemat."
        sub="Buktikan sendiri — kurs terbaik, ongkos termurah se-Hong Kong."
      />
      <CtaFinal />
      <Footer />
    </div>
  );
}

export default App;
