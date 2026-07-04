import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Hero } from './components/sections/HeroSection/HeroSection';

const ProductShowcase = lazy(() => import('./components/sections/ProductShowcase/ProductShowcase').then(module => ({ default: module.ProductShowcase })));
const ProductCategories = lazy(() => import('./components/sections/ProductCategories/ProductCategories').then(module => ({ default: module.ProductCategories })));
const CareSteps = lazy(() => import('./components/sections/CareSteps/CareSteps').then(module => ({ default: module.CareSteps })));
const CareRightTime = lazy(() => import('./components/sections/CareRightTime/CareRightTime').then(module => ({ default: module.CareRightTime })));
const NewsletterCTA = lazy(() => import('./components/sections/NewsletterCTA/NewsletterCTA').then(module => ({ default: module.NewsletterCTA })));
const Footer = lazy(() => import('./components/layout/Footer/Footer').then(module => ({ default: module.Footer })));

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '-40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
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