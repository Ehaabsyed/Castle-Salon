'use client';
import Navbar from './components/salon/Navbar';
import Hero from './components/salon/Hero';
import About from './components/salon/About';
import Services from './components/salon/Services';
import WhyChooseUs from './components/salon/WhyChooseUs';
import Gallery from './components/salon/Gallery';
import Testimonials from './components/salon/Testimonials';
import Team from './components/salon/Team';
import Offers from './components/salon/Offers';
import Contact from './components/salon/Contact';
import Footer from './components/salon/Footer';
import BackToTop from './components/salon/BackToTop';
import Loader from './components/salon/Loader';
const App = () => {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Gallery /> */}
      <Testimonials />
      {/* <Team /> */}
      <Offers />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default App;
