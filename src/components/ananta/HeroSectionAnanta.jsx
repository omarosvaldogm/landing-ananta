import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkVeil from '../DarkVeil';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const HeroSectionAnanta = () => {
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
      {/* DarkVeil como fondo */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>
      
      {/* Contenido principal - Ahora centrado y ocupando todo el ancho */}
      <motion.div 
        className="container mx-auto px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-16 md:py-24 w-full mt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Texto centrado */}
        <motion.div 
          className="w-full text-center mb-16"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]"
            variants={itemVariants}
          >
            <span className='text-white'>Controla y administra tu empresa con</span> Ananta ERP
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto text-gray-300"
            variants={itemVariants}
          >
            Software integral que optimiza y centraliza todos los procesos de tu empresa, con una plataforma intuitiva y escalable que crece junto a tu negocio.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
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
          </motion.div>
        </motion.div>

        {/* Video ahora ubicado abajo */}
        <motion.div 
          className="w-full max-w-4xl"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full">
            <motion.div 
              className="absolute -inset-5 bg-gradient-to-r from-[#326a10] to-secondary rounded-2xl opacity-20 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl transform perspective-1000 rotate-y-6 hover:rotate-y-0 transition-all duration-700"
              initial={{ opacity: 0, rotateY: 15 }}
              animate={{ opacity: 1, rotateY: 6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotateY: 0 }}
              style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
            >
              <div className="bg-[#0d0d0d] py-2 px-4 flex gap-2 border-b border-[#2a2a2a]">
                <div className="w-3 h-3 rounded-full bg-[#ff5c8a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f0b429]"></div>
                <div className="w-3 h-3 rounded-full bg-[#38d86b]"></div>
              </div>
              
              <div className="w-full h-full">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                >
                  <source src="/video/VIDEOERP.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSectionAnanta;