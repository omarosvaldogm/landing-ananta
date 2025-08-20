import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkVeil from '../DarkVeil';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const HeroSection = () => {
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

  // Estado para StatsCounter
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-counter');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          setStartCounters(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: 10, suffix: '+', label: 'Experiencia', duration: 2 },
    { value: 60, suffix: '+', label: 'Clientes', duration: 2.5 },
    { value: 1.2, suffix: 'k+', label: 'Vehículos', decimal: 1, duration: 3 },
    { value: 3, suffix: '+', label: 'Países de operación', duration: 1.5 }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-between overflow-hidden relative">
      {/* DarkVeil como fondo */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>
      
      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 py-16 mt-16 md:mt-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Lado izquierdo: Texto */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]"
            variants={itemVariants}
          >
            Ananta ERP
            <motion.span 
              className="block text-white text-2xl md:text-3xl font-normal mt-2"
              variants={itemVariants}
            >
              y plataforma madre inteligente
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light mb-8 max-w-lg mx-auto md:mx-0 text-gray-300"
            variants={itemVariants}
          >
            Software integral que optimiza y centraliza todos los procesos de tu empresa, con una plataforma intuitiva y escalable que crece junto a tu negocio.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link to={'/contacto'}>
              <motion.button 
                className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#4A6D1A]/30 transition-all duration-300 transform hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar una demo
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Lado derecho: Mockup futurista */}
        <motion.div 
          className="w-full md:w-[55%] flex justify-center relative"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full max-w-2xl">
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

      {/* StatsCounter en la parte inferior */}
      <div id="stats-counter" className="w-full relative z-10 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] border border-[#2a2a2a] hover:border-[#9BBF5F] transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                  {startCounters ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimal || 0}
                      duration={stat.duration}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;