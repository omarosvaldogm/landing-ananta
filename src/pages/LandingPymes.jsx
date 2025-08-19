import React, { useState, useEffect } from 'react';
import HeroPymes from '../components/landing/HeroPymes'
import Footer from '../components/Footer'
import FuncionalidadesSection from '../components/inicio/FuncionalidadesSection'
import ModuleSelector from '../components/pymes/ModuleSelector';
import PaymentForm from '../components/pymes/PaymentForm';
import PackageFeatures from '../components/landing/PackageFeatures';
import BriefPresentation from '../components/landing/BriefPresentation';
import TestimonialSection from '../components/landing/TestimonialSection';
import FinalCta from '../components/landing/FinalCta';

function LandingPymes() {
    const [selectedModules, setSelectedModules] = useState([]);
    const [showPaymentForm, setShowPaymentForm] = useState(false);

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
        < HeroPymes />
        < FuncionalidadesSection />
        < PackageFeatures />
        < BriefPresentation />
        < TestimonialSection />
        < FinalCta />
        <ModuleSelector onModulesSelected={handleModulesSelected} />
        {showPaymentForm && (
          <div id="payment-form">
            <PaymentForm selectedModules={selectedModules} />
          </div>
        )}
        < Footer />
    </div>
  )
}

export default LandingPymes