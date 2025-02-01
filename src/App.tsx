import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Industries from './components/sections/Industries';
import Technologies from './components/sections/Technologies';
import Portfolio from './components/sections/Portfolio';
import AppMania from './components/sections/AppMania';
import Blog from './components/sections/Blog';
import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <Technologies />
        <Portfolio />
        <AppMania />
        <Blog />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;