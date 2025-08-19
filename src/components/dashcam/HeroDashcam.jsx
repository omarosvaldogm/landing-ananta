import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkVeil from '../DarkVeil';

const HeroDashcam = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array de imágenes PNG (reemplaza con tus rutas reales)
  const images = [
    '/img/dashcam/dashcam1.png',
    '/img/dashcam/dashcam2.png',
    '/img/dashcam/dashcam3.png',
    '/img/dashcam/dashcam4.png'
  ];

  // Configuración del carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  // Animaciones
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-between overflow-hidden relative">
      {/* DarkVeil como fondo */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-16 md:py-24 w-full md:mt-24">
        {/* Texto centrado */}
        <motion.div 
          className="w-full text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className='text-white'>¡Protege tu inversión con</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
              Dashcam IA!
            </span>
          </h1>
        </motion.div>

        {/* Carrusel de imágenes flotantes */}
        <div className="w-full max-w-4xl relative">
          {/* Efecto de gradiente detrás */}
          <motion.div 
            className="absolute -inset-10 bg-gradient-to-r from-[#326a10] to-secondary rounded-full opacity-20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Contenedor del carrusel */}
          <div className="relative w-full max-w-4xl aspect-video mx-auto">
            {images.map((image, index) => (
                <motion.img
                key={index}
                src={image}
                alt={`Dashcam ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                variants={imageVariants}
                initial="hidden"
                animate={index === currentImageIndex ? 'visible' : 'hidden'}
                exit="exit"
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
            ))}
            </div>


          {/* Indicadores del carrusel (opcional) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashcam;