import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConfirmacionContacto from '../components/ConfirmacionContacto';

function InformacionContactoPage() {
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
        <ConfirmacionContacto />
      </main>
      <Footer />
    </div>
  );
}

export default InformacionContactoPage;