import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importar Link de React Router

const PricingPlansToggle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showImplementation, setShowImplementation] = useState(false);

  const licensePlans = [
    {
      name: "BÁSICO",
      price: "$6,800",
      period: "LICENCIA MENSUAL",
      features: [
        "SIN DESARROLLOS",
        "25 usuarios",
        "Acceso a todos los módulos",
        "1000 timbrados en Facturas y carta parte",
        "2 razones sociales",
        "Sin desarrollos"
      ],
      highlight: false
    },
    {
      name: "INTERMEDIO",
      price: "$8,800",
      period: "LICENCIA MENSUAL",
      features: [
        "1 DESARROLLOS",
        "36 usuarios",
        "Acceso a todos los módulos",
        "Facturas y carta parte ilimitadas",
        "3 razones sociales",
        "Tiempos de desarrollo de 6 a 12 meses"
      ],
      highlight: false
    },
    {
      name: "PREMIUM",
      price: "$22,800",
      period: "LICENCIA MENSUAL",
      features: [
        "2 DESARROLLOS",
        "Usuarios ilimitados",
        "Acceso a todos los módulos",
        "Facturas y carta parte ilimitadas",
        "Razones sociales ilimitadas",
        "Tiempos de desarrollo de 4 a 8 meses"
      ],
      highlight: true
    }
  ];

  const implementationPlans = [
    {
      name: "BÁSICO",
      price: "$3,800",
      period: "MENSUALIDAD",
      features: [
        "SIN DESARROLLOS",
        "25 usuarios",
        "Acceso a todos los módulos",
        "1,000 timbrados en Facturas y carta porte",
        "6 razones sociales",
        "Sin desarrollos"
      ],
      highlight: false,
      contactMessage: "Contáctanos para cotización de implementación"
    },
    {
      name: "INTERMEDIO",
      price: "$4,800",
      period: "MENSUALIDAD",
      features: [
        "1 DESARROLLOS",
        "35 usuarios",
        "Acceso a todos los módulos",
        "Facturas y carta porte ilimitadas",
        "10 razones sociales",
        "Tiempos de desarrollo de 6 a 12 meses"
      ],
      highlight: false,
      contactMessage: "Contáctanos para cotización de implementación"
    },
    {
      name: "PREMIUM",
      price: "$15,800",
      period: "MENSUALIDAD",
      features: [
        "2 DESARROLLOS",
        "Usuarios ilimitados",
        "Acceso a todos los módulos",
        "Facturas y carta porte ilimitadas",
        "Razones sociales ilimitadas",
        "Tiempos de desarrollo de 4 a 8 meses"
      ],
      highlight: true,
      contactMessage: "Contáctanos para cotización de implementación"
    }
  ];

  const addons = [
    { name: "Usuario extra", price: "$290/mes" },
    { name: "Facturación ilimitada", price: "$1,160/mes" },
    { name: "Razón social extra", price: "$580/mes" },
    { name: "Razones sociales ilimitadas", price: "$1,200/mes" }
  ];

  const currentPlans = showImplementation ? implementationPlans : licensePlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { y: -20, opacity: 0 }
  };

  const switchVariants = {
    off: { x: 2 },
    on: { x: 30 }
  };

  return (
    <div className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]"
            variants={itemVariants}
          >
            {showImplementation ? "IMPLEMENTACIÓN ANANTA ERP" : "PLANES CERO INVERSIÓN ANANTA ERP"}
          </motion.h2>
          
          <motion.div 
            className="flex justify-center items-center mb-6"
            variants={itemVariants}
          >
            <span className={`mr-4 ${!showImplementation ? 'text-white font-medium' : 'text-gray-400'}`}>Licencia Mensual</span>
            
            <button
              onClick={() => setShowImplementation(!showImplementation)}
              className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-300 focus:outline-none ${showImplementation ? 'bg-[#9BBF5F]' : 'bg-gray-600'}`}
            >
              <motion.span
                className="inline-block w-6 h-6 rounded-full bg-white shadow-md"
                variants={switchVariants}
                initial={false}
                animate={showImplementation ? "on" : "off"}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            </button>
            
            <span className={`ml-4 ${showImplementation ? 'text-white font-medium' : 'text-gray-400'}`}>Implementación</span>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </motion.p>
        </motion.div>

        {/* Planes */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={showImplementation ? "implementation" : "license"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
          >
            {currentPlans.map((plan, index) => (
              <motion.div 
                key={`${showImplementation ? "imp" : "lic"}-${index}`}
                className={`bg-gradient-to-br from-[#121212] to-[#1a1a1a] border rounded-xl p-8 relative overflow-hidden hover:border-[#9BBF5F]/30 transition-all duration-300 group ${plan.highlight ? 'border-[#9BBF5F]' : 'border-[#2a2a2a]'}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-[#9BBF5F] text-[#0a0a0a] font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                    RECOMENDADO
                  </div>
                )}
                
                {/* Efecto de gradiente */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                
                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-[#9BBF5F]' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm">{plan.period}</p>
                    <p className="text-3xl font-bold text-white">{plan.price}</p>
                    {showImplementation && (
                      <p className="text-[#9BBF5F] text-sm mt-2">
                        {plan.contactMessage}
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-[#73963C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Botón que lleva al formulario de contacto */}
                  <Link 
                    to="/contacto" 
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 text-center ${plan.highlight ? 'bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-[#0a0a0a] hover:shadow-lg hover:shadow-[#73963C]/50' : 'bg-[#1a1a1a] border border-[#2a2a2a] text-white hover:border-[#9BBF5F]'}`}
                  >
                    {showImplementation ? "Solicita cotización de implementación" : "Contratar ahora"}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Sección de Add-ons */}
          <motion.div 
            className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">MEJORA TU PLAN</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addons.map((addon, index) => (
                <Link 
                  key={index} 
                  to="/contacto"
                  className="block bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#9BBF5F]/30 transition-colors duration-300"
                >
                  <h4 className="text-white font-medium mb-1">{addon.name}</h4>
                  <p className="text-[#9BBF5F] font-bold">{addon.price}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PricingPlansToggle;