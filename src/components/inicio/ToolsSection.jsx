import React from 'react';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const ToolsSection = () => {
  // Referencia y detección de cuándo el elemento está en vista
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animaciones
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="bg-[#0a0a0a] md:min-h-screen flex items-center justify-center py-16 overflow-hidden relative"
    >
      {/* Efectos de fondo futuristas */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[100px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#8bda5a] rounded-full filter blur-[80px]"
        ></motion.div>
      </div>
      
      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Lado izquierdo: Texto */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative z-20"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-light mb-4 text-[#9BBF5F]"
            variants={itemVariants}
          >
            Herramientas flexibles y poderosas
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            variants={itemVariants}
          >
            Software ERP y Plataforma madre
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light mb-8 max-w-lg mx-auto md:mx-0 text-gray-300 text-justify"
            variants={itemVariants}
          >
            Ananta es un software ERP y plataforma madre que centraliza todas las operaciones de tu empresa en un solo lugar. Ofrece herramientas flexibles y personalizables para gestionar combustible, mantenimiento, inventarios, ventas, y más, brindando el control total y la eficiencia que tu negocio necesita para crecer.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-30"
            variants={itemVariants}
          >
            <Link to={'/contacto'}>
              <motion.button 
                className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/30 transition-all duration-300 transform hover:scale-[1.02]"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(155, 191, 95, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contacta con un ejecutivo
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Lado derecho: Logo grande transparente */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute text-[#0d0d0d] opacity-10 text-[20vw] md:text-[25vw] font-bold whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img src="/img/LOGOANANTA.png" alt="Logo Ananta" className="w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToolsSection;