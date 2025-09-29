import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSectionPyme = ({ onDiscountClick, onDetailsClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Estado para controlar mute

  // Contador regresivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Animaciones (mantener las mismas que antes)
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
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
    

      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 py-16 md:py-44 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Texto a la izquierda */}
        <motion.div 
          className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 mt-24 md:mt-0"
          variants={containerVariants}
        >
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white "
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">Oferta Especial:</span> Gestiona tu PYME
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-6 text-gray-300"
            variants={itemVariants}
          >
            Sencillo, rápido y <span className="font-bold text-white">50% de descuento en implementación</span> exclusivo hoy.
          </motion.p>
          
          <motion.ul 
            className="mb-8 space-y-2 text-gray-300"
            variants={itemVariants}
          >
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#73963C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Capacitación gratuita
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#73963C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Asesoramiento personalizado incluido
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#73963C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Todas las herramientas que usan las grandes empresas
            </li>
          </motion.ul>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button 
                    className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#73963C]/50 transition-all duration-300 transform hover:scale-[1.02] text-lg relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    onClick={onDiscountClick}
                >
                    <span className="relative z-10">¡Quiero mi descuento!</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
            
            <motion.button 
                    className="bg-transparent border-2 border-[#73963C] text-white font-bold py-3 px-8 rounded-full hover:bg-[#73963C]/20 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onDetailsClick}
                >
                    Ver detalles
                </motion.button>
          </motion.div>
        </motion.div>

        {/* Video de YouTube a la derecha */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          {/* Etiqueta de descuento */}
          <motion.div
            className="absolute -bottom-0 md:-top-6 -left-6 z-20"
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: -15, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            <div className="bg-[#9BBF5F] text-[#0a0a0a] font-extrabold px-6 py-3 rounded-full shadow-xl transform rotate-0 md:rotate-[-15deg]">
              <div className="text-3xl">50% OFF</div>
              <div className="text-xs uppercase">En implementación</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full flex justify-center items-center relative"
            variants={videoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                ref={videoRef}
                src={`https://www.youtube.com/embed/-ZZKnlY5c6M?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=-ZZKnlY5c6M&controls=0&modestbranding=1&rel=0`}
                title="Demo Ananta ERP"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Botón para activar/desactivar sonido */}
              <motion.button
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-30"
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
                  {isMuted ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                  ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072M12 6l-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h4l2 2 4-4V6z" />
                      </svg>
                  )}
              </motion.button>
              
              {/* Overlay para mejorar la visibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSectionPyme;