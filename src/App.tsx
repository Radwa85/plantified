import { motion } from 'framer-motion';
import { ProductShowcase } from './components/sections/ProductShowcase/ProductShowcase';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { ProductCategories } from './components/sections/ProductCategories/ProductCategories';
import { CareSteps } from './components/sections/CareSteps/CareSteps';
import { CareRightTime } from './components/sections/CareRightTime/CareRightTime'; 
import { NewsletterCTA } from './components/sections/NewsletterCTA/NewsletterCTA';
import { Hero } from './components/sections/HeroSection/HeroSection';

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="font-poppins bg-plant-bg min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        
        <RevealOnScroll>
          <ProductShowcase />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ProductCategories />
        </RevealOnScroll>
      
        <RevealOnScroll>
          <CareSteps />
        </RevealOnScroll>
        <RevealOnScroll>
          <CareRightTime />
        </RevealOnScroll>
        <RevealOnScroll>
          <NewsletterCTA />
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}

export default App;