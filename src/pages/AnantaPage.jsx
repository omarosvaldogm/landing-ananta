import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSectionAnanta from '../components/ananta/HeroSectionAnanta';
import FeaturesSection from '../components/inicio/FeaturesSection';
import CtaSection from '../components/ananta/CtaSection';
import FuncionalidadesSection from '../components/inicio/FuncionalidadesSection';
import InfoSection from '../components/ananta/InfoSection';
import ContactForm from '../components/ContactForm';
import PricingPlans from '../components/ananta/PricingPlans';

function FuncionalidadesPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solución para el scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Para un desplazamiento inmediato sin animación
    });
    
    // Alternativa más compatible
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <div className='bg-[#0a0a0a] min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <HeroSectionAnanta />
        <FeaturesSection />
        <CtaSection />
        <FuncionalidadesSection />
        <InfoSection />
        <PricingPlans />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default FuncionalidadesPage;