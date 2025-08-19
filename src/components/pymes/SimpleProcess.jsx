import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCreditCard, FiUsers } from 'react-icons/fi';

const SimpleProcess = () => {
  const steps = [
    {
      number: 1,
      icon: <FiCheckCircle className="w-6 h-6 text-[#9BBF5F]" />,
      title: "Elige tus herramientas",
      description: "Selecciona los 5 módulos que mejor se adapten a las necesidades de tu negocio."
    },
    {
      number: 2,
      icon: <FiCreditCard className="w-6 h-6 text-[#9BBF5F]" />,
      title: "Paga",
      description: "Realiza el pago de implementación ($8,400 con descuento) para activar tu cuenta Ananta."
    },
    {
      number: 3,
      icon: <FiUsers className="w-6 h-6 text-[#9BBF5F]" />,
      title: "Implementación y Capacitación",
      description: "El equipo de implementación de Ananta se contacta para iniciar la capacitación de uso de tu ERP."
    }
  ];

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
    }
  };

  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]"
            variants={itemVariants}
          >
            Proceso Simple y Rápido
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Implementa Ananta ERP en tu negocio en solo 3 sencillos pasos
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 relative overflow-hidden hover:border-[#9BBF5F]/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Efecto de gradiente */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
              
              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-2xl font-bold text-[#9BBF5F] group-hover:border-[#9BBF5F] transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="text-2xl">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 flex-grow">{step.description}</p>
                
                {/* Indicador de paso */}
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                )} */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleProcess;