import React, { useState, useEffect, useRef } from 'react';
import HeroPymes from '../components/landing/HeroPymes'
import Footer from '../components/Footer'
import FuncionalidadesSection from '../components/inicio/FuncionalidadesSection'
import ModuleSelector from '../components/pymes/ModuleSelector';
import PaymentForm from '../components/pymes/PaymentForm';
import PackageFeatures from '../components/landing/PackageFeatures';
import BriefPresentation from '../components/landing/BriefPresentation';
import TestimonialSection from '../components/landing/TestimonialSection';
import FinalCta from '../components/landing/FinalCta';
import Header from '../components/Header';
import Carrusel from '../components/landing/Carrusel';
import ModuleSelectorWithContact from '../components/pymes/ModuleSelectorWithContact';

function LandingPymes() {
    const [selectedModules, setSelectedModules] = useState([]);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const moduleSelectorRef = useRef(null); // Referencia para ModuleSelector
    const funcionalidadesRef = useRef(null); // Nueva referencia para FuncionalidadesSection

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

    // Nueva función para hacer scroll a FuncionalidadesSection
    const scrollToFuncionalidades = () => {
        if (funcionalidadesRef.current) {
            funcionalidadesRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className='bg-[#0a0a0a] min-h-screen flex flex-col'>
            <Header/>
            <HeroPymes 
                onDiscountClick={scrollToModuleSelector} 
                onDetailsClick={scrollToFuncionalidades} // Nueva prop
            />
            <div ref={funcionalidadesRef}> {/* Referencia para FuncionalidadesSection */}
                <FuncionalidadesSection />
            </div>
            <Carrusel />
            <PackageFeatures />
            <BriefPresentation />
            <TestimonialSection />
            <FinalCta onDiscountClick={scrollToModuleSelector} />
            <div ref={moduleSelectorRef}>
                <ModuleSelectorWithContact onModulesSelected={handleModulesSelected} />
            </div>
            {showPaymentForm && (
                <div id="payment-form">
                    <PaymentForm selectedModules={selectedModules} />
                </div>
            )}
            <Footer />
        </div>
    );
}

export default LandingPymes;