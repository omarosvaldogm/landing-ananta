import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiChevronRight } from 'react-icons/fi';

const PymesHero = () => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[90px]"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 py-20 mt-16">
        {/* Sección de texto y precios */}
        <motion.div 
          className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-3 px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-sm text-[#9BBF5F] font-medium">
              Soluciones empresariales
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">ERP para </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
              PYMES en crecimiento
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            Optimiza tus operaciones con un sistema integral diseñado para escalar con tu negocio.
          </motion.p>

          {/* Tarjeta de precios premium */}
          <motion.div 
            className="bg-[#121212] border border-[#252525] rounded-xl p-8 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#121212] opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] rounded-xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Encabezado */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
                    Plan PYMES Premium
                  </span>
                </h2>
                <p className="text-gray-400">Todo lo que necesitas para gestionar tu negocio</p>
              </div>

              {/* Precios */}
              <div className="mb-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Implementación</div>
                  <div className="flex items-center">
                    <span className="text-gray-400 line-through mr-2 text-sm">$12,000</span>
                    <span className="text-2xl font-bold text-[#9BBF5F]">$8,400</span>
                  </div>
                  <div className="text-xs text-[#9BBF5F] font-medium mt-1">30% de descuento</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Mensualidad</div>
                  <div className="text-2xl font-bold text-white">$3,800</div>
                  <div className="text-xs text-gray-500 mt-1">Precio fijo sin sorpresas</div>
                </div>
              </div>

              {/* Características */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">8 usuarios incluidos</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">1 razón social</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">5 módulos a elegir</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">250 timbrados mensuales</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">Asistencia 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#9BBF5F]/10 p-1 rounded-full">
                    <FiCheck className="text-[#9BBF5F] text-sm" />
                  </div>
                  <span className="text-gray-300">Sin contratos forzosos</span>
                </div>
                
                {/* Promoción destacada */}
                <div className="mt-6 p-4 bg-[#1a1a1a] border border-[#9BBF5F]/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#9BBF5F]/20 p-1 rounded-full animate-pulse">
                      <FiZap className="text-[#9BBF5F] text-sm" />
                    </div>
                    <div>
                      <span className="text-[#9BBF5F] font-medium text-sm block mb-1">
                        PROMOCIÓN EXCLUSIVA
                      </span>
                      <span className="text-gray-300 text-sm">
                        Herramientas QR + integración GPS para control de neumáticos y baterías (6 meses gratis)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón */}
              <motion.button 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-[#9BBF5F]/30 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contratar con descuento</span>
                <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Sección de imagen */}
        <motion.div 
  className="w-full lg:w-1/2 flex justify-center relative -mt-24 lg:-mt-12"  // Cambiado mt-12 a -mt-24 (negativo)
  variants={floatVariants}
  initial="initial"
  animate="animate"
>
  <div className="relative w-full max-w-xl">
    {/* Contenedor de imagen */}
    <motion.div 
      className="relative overflow-hidden rounded-xl transform perspective-1000 rotate-y-3 hover:rotate-y-0 transition-all duration-700"
      initial={{ opacity: 0, rotateY: 10 }}
      animate={{ opacity: 1, rotateY: 3 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileHover={{ rotateY: 0 }}
      style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }}
    >
      {/* Imagen de ejemplo - reemplazar con tu imagen */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8">
          <img src="/img/ananlap.png" alt="ERP para PYMES" className="max-h-[500px]" /> {/* Agregado max-h para controlar tamaño */}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </motion.div>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default PymesHero;