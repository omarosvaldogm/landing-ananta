import React from 'react';
import { motion } from 'framer-motion';
import AliadosTicker from '../inicio/AliadosTicker';
import { Link } from 'react-router-dom';

const GPS = () => {
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

  return (
    <div className="bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="container mx-auto px-6">

<div className="container mx-auto mb-12">
        <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500"></div>
          
          {/* Contenido en dos columnas */}
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            {/* Columna izquierda - Texto */}
            <div className=" md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-2xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                  ¡Accede a rutas de hasta 8 meses de antigüedad!


                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Instalamos tus rastreadores con el máximo cuidado, protegiendo tu vehículo de cualquier daño y asegurándonos de que sean prácticamente indetectables para evitar robos.

Nuestros equipos GPS transmiten datos directamente a la plataforma de rastreo, facilitando la visualización de recorridos.
              </p>
              <Link to={'/contacto'}>
              <button className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.02] group">
                Más información
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </Link>
            </div>

            {/* Columna derecha - Logo (reemplaza con tu imagen real) */}
            
          </div>

          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[80px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#73963C] rounded-full filter blur-[80px] opacity-10"></div>
        </div>
      </div>
        {/* Primera sección con video */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Monitoreo 24/7
            </h3>
            <p className="text-gray-300 space-y-3 text-lg">
                Plataforma de rastreo avanzada con informes hechos a tu medida.

¡No esperes más! Contrata hoy mismo.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Aquí va el video */}
            <div className="aspect-video bg-black/50 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <img
                src='/img/capturadash.png'
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

                {/* Sección de alertas */}
        {/* <motion.div 
          className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-12 mb-16"
          initial="hidden"
          animate="visible"
          
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-white text-center"
            variants={itemVariants}
          >
            Alertas <span className="text-[#9BBF5F]">Inteligentes</span>
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              "Distracción del conductor",
              "Uso del celular",
              "Colisión",
              "Exceso de velocidad",
              "Cambio de carril",
              "Detección de peatones",
              "Somnolencia",
              "Frenado brusco"
            ].map((alert, index) => (
              <motion.div 
                key={index}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 flex items-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#9BBF5F] mr-3"></div>
                <span className="text-gray-300">{alert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        {/* Sección de CTA con imagen */}
        



        {/* Sección de distribuidores */}
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-xl font-bold mb-6 text-gray-300"
            variants={itemVariants}
          >
            Distribuidor Autorizado:
          </motion.h3>
<div className="mb-12">

          <AliadosTicker />
</div>
          
          <motion.div 
  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
  variants={containerVariants}
>
  {[
    "Venta y arrendamiento de dispositivos",
    "Datos y plataforma de rastreo incluida",
    "Tecnología 4G con amplia cobertura nacional e internacional",
    "Asistencia las 24 hrs en caso de robo"
  ].map((feature, index) => (
    <motion.div 
      key={index}
      className="bg-[#1a1a1a]/50 border border-[#2a2a2a] rounded-lg p-4"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[#9BBF5F] text-2xl mb-2">
        {["💰", "📡", "🌐", "🛡️"][index]}
      </div>
      <p className="text-gray-300">{feature}</p>
    </motion.div>
  ))}
</motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GPS;