import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/layout/Header/Header';
import { Hero } from './components/sections/HeroSection/HeroSection';

const ProductShowcase = lazy(() => import('./components/sections/ProductShowcase/ProductShowcase').then(module => ({ default: module.ProductShowcase })));
const ProductCategories = lazy(() => import('./components/sections/ProductCategories/ProductCategories').then(module => ({ default: module.ProductCategories })));
const CareSteps = lazy(() => import('./components/sections/CareSteps/CareSteps').then(module => ({ default: module.CareSteps })));
const CareRightTime = lazy(() => import('./components/sections/CareRightTime/CareRightTime').then(module => ({ default: module.CareRightTime })));
const NewsletterCTA = lazy(() => import('./components/sections/NewsletterCTA/NewsletterCTA').then(module => ({ default: module.NewsletterCTA })));
const Footer = lazy(() => import('./components/layout/Footer/Footer').then(module => ({ default: module.Footer })));

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
        
        <Suspense fallback={<div className="h-20" />}>
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
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;