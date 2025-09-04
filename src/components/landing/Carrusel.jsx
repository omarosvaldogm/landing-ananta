import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CarruselImagenes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
            Nuestras Soluciones en Acción
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre cómo nuestro ERP transforma la gestión de tu negocio
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
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
                className="w-full h-full object-cover"
              />
              
              {/* Overlay de información */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-gray-300">
                  {images[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Controles de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-3 rounded-full transition-all duration-300"
          >
            <FiChevronLeft className="w-6 h-6 text-[#9BBF5F]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#9BBF5F]/20 p-3 rounded-full transition-all duration-300"
          >
            <FiChevronRight className="w-6 h-6 text-[#9BBF5F]" />
          </button>
          
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#9BBF5F]' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarruselImagenes;