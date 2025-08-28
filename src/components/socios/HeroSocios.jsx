import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const HeroSocios = () => {
  // Animaciones existentes
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

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-between overflow-hidden relative">

      {/* Contenido principal - Ahora en dos columnas */}
      <motion.div 
        className="container mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 py-16 md:py-24 w-full mt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Columna izquierda - Contenido */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className='text-white '>Digitaliza tu empresa con</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] "> Ananta ERP</span>
          </motion.h1>
          
          {/* Texto de descuento en grande */}
          <motion.div 
            className="mb-8 text-center md:text-left bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 relative overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="text-7xl md:text-8xl lg:text-8xl font-bold text-[#9BBF5F]">
              25%
            </div>
            <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white uppercase mt-2">
              DE DESCUENTO
            </div>
            <div className="text-2xl md:text-3xl lg:text-3xl font-bold text-white uppercase mt-1">
              EN IMPLEMENTACIÓN
            </div>
                          <motion.button 
                            className="mt-10 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-[#9BBF5F]/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            
                          >
                            <span>Contratar ahora</span>
                            
                          </motion.button>
          </motion.div>
          
          {/* <motion.div 
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link to={'/contacto'}>
              <motion.button 
                className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#4A6D1A]/30 transition-all duration-300 transform hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contrata Ahora
              </motion.button>
            </Link>
          </motion.div> */}
        </motion.div>

        {/* Columna derecha - Imagen de laptop */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full">
            <div className="w-full h-full">
              <img
                src="/img/ananlap.png" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                alt="Ananta ERP - Sistema de gestión empresarial"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSocios;