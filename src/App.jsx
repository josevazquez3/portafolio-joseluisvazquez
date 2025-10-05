import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Carousel />
      <Projects />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;