import React, { useState, useEffect } from 'react';
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

  return (
    <div className='bg-[#0a0a0a] min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <PricingPlan />
        <SimpleProcess />
        <ModuleSelector onModulesSelected={handleModulesSelected} />
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