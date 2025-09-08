import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const CarruselImagenes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Array de imágenes de ejemplo (reemplaza con tus propias imágenes)
  const images = [
    {
      src: "/img/modulos/facturacion2.png",
      title: "Facturación",
      description: "Convierte cotizaciones en facturas ilimitadas junto con sus complementos."
    },
    {
      src: "/img/modulos/inventario2.png",
      title: "Inventario",
      description: "Controla existencias con alertas por stock mínimo."
    },
    {
      src: "/img/modulos/tickets2.png",
      title: "Tickets internos",
      description: "Da seguimiento a tareas y reportes internos."
    },
    {
      src: "/img/modulos/mantenimiento2.png",
      title: "Mantenimientos",
      description: "Registra servicios y costos por unidad."
    },
    {
      src: "/img/modulos/checklist.png",
      title: "Checklists",
      description: "Digitaliza formularios con campos personalizables."
    },
    {
      src: "/img/modulos/arrendamiento2.png",
      title: "Arrendamiento",
      description: "Administra unidades en renta por ubicación y estatus."
    },
    {
      src: "/img/modulos/combustible2.png",
      title: "Control de combustible",
      description: "Optimiza consumo y carga por unidad."
    },
    {
      src: "/img/modulos/BODEGAS2.png",
      title: "Bodegas",
      description: "Gestiona espacios y disponibilidad en tiempo real."
    },
    {
      src: "/img/modulos/EIR2.png",
      title: "EIR",
      description: "Consolida o desconsolida contenedores fácilmente."
    },
    {
      src: "/img/modulos/camara2.png",
      title: "Dashcam IA",
      description: "Visualiza en vivo desde Ananta."
    },
    {
      src: "/img/modulos/MONITOREO ACTIVO.png",
      title: "Monitoreo activo",
      description: "Centraliza la supervisión de tu flotilla con alertas y reportes."
    },
    {
      src: "/img/modulos/PUNTO DE VENTA.png",
      title: "Punto de venta",
      description: "Cobra, gestiona inventarios y factura en un solo lugar."
    },
    {
      src: "/img/modulos/viajes2.png",
      title: "Viajes",
      description: "Gestiona servicios logísticos con reportes automáticos."
    }
  ];

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Auto-avance del carrusel
  useEffect(() => {
    if (lightboxOpen) return; // No auto-avanzar cuando el lightbox está abierto
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, lightboxOpen]);

  return (
    <div className="bg-[#0a0a0a] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
            Nuestras Soluciones en Acción
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Descubre cómo nuestro ERP transforma la gestión de tu negocio
          </p>
        </div>

        <div className="relative h-64 md:h-[500px] rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].title}
                className="w-full h-full object-contain md:object-cover cursor-pointer"
                onClick={() => openLightbox(currentIndex)}
              />
              
              {/* Overlay de información */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {images[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Controles de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-2 md:p-3 rounded-full transition-all duration-300"
          >
            <FiChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#9BBF5F]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-2 md:p-3 rounded-full transition-all duration-300"
          >
            <FiChevronRight className="w-4 h-4 md:w-6 md:h-6 text-[#9BBF5F]" />
          </button>
          
          {/* Indicadores */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#9BBF5F]' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox para vista ampliada */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={closeLightbox}
            >
              <FiX className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-4xl h-full max-h-screen flex items-center justify-center">
              <motion.img 
                key={`lightbox-${currentIndex}`}
                src={images[currentIndex].src} 
                alt={images[currentIndex].title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Controles de navegación en el lightbox */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-3 rounded-full transition-all duration-300"
              >
                <FiChevronLeft className="w-6 h-6 text-[#9BBF5F]" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-3 rounded-full transition-all duration-300"
              >
                <FiChevronRight className="w-6 h-6 text-[#9BBF5F]" />
              </button>
              
              {/* Información de la imagen en el lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-gray-300">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarruselImagenes;