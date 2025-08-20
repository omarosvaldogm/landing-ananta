import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlan from '../components/pymes/PricingPlan';
import SimpleProcess from '../components/pymes/SimpleProcess';
import ModuleSelector from '../components/pymes/ModuleSelector';
import PaymentForm from '../components/pymes/PaymentForm';

function PymesPage() {
  const { pathname } = useLocation();
  const [selectedModules, setSelectedModules] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const moduleSelectorRef = useRef(null); // Referencia para ModuleSelector

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  const handleModulesSelected = (modules) => {
    setSelectedModules(modules);
    setShowPaymentForm(true);
    setTimeout(() => {
      const paymentForm = document.getElementById('payment-form');
      if (paymentForm) {
        paymentForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

      // Función para hacer scroll al ModuleSelector
    const scrollToModuleSelector = () => {
        if (moduleSelectorRef.current) {
            moduleSelectorRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

  return (
    <div className='bg-[#0a0a0a] min-h-screen flex flex-col'>
      
      <main className='flex-grow'>
        <PricingPlan 
          onDiscountClick={scrollToModuleSelector} 
        />
        <SimpleProcess />
        <div ref={moduleSelectorRef}>
                <ModuleSelector onModulesSelected={handleModulesSelected} />
            </div>
        {showPaymentForm && (
          <div id="payment-form">
            <PaymentForm selectedModules={selectedModules} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default PymesPage;