import Hero from '../sections/Hero';
import Features from '../sections/Features';
import AboutSection from '../sections/AboutSection';
import ServiceCards from '../sections/ServiceCards';
import CtaBanner from '../components/CtaBanner';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import QuoteSection from '../sections/QuoteSection';
import Testimonials from '../components/Testimonials';
import '../styles/home.css';

// The home page is just the sections stacked one after another.
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection className="home-about" />
      <ServiceCards />
      <CtaBanner />
      <Process />
      <Projects />
      <QuoteSection />
      <Testimonials />
    </>
  );
}

export default Home;
