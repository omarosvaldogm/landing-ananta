import React from 'react';
import { motion } from 'framer-motion';
import AliadosTicker from '../inicio/AliadosTicker';
import { Link } from 'react-router-dom';

const Dashcam = () => {
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

        {/* Primera sección con video */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Nuestras dashcams IA con memoria integrada y 4G ofrecen:
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-[#9BBF5F] mr-2">✓</span>
                Acceso inmediato a alertas inteligentes y grabaciones
              </li>
              <li className="flex items-start">
                <span className="text-[#9BBF5F] mr-2">✓</span>
                Software intuitivo con Ananta para gestión rápida
              </li>
              <li className="flex items-start">
                <span className="text-[#9BBF5F] mr-2">✓</span>
                Regulación de malos hábitos al volante
              </li>
              <li className="flex items-start">
                <span className="text-[#9BBF5F] mr-2">✓</span>
                Control de consumo de combustible
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Aquí va el video */}
            <div className="aspect-video bg-black/50 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                >
                  <source src="https://sudsolutions.mx/wp-content/uploads/2024/12/Recorrido-2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
                
              </div>
            </div>
          </motion.div>
        </motion.div>

                {/* Sección de alertas */}
        <motion.div 
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
        </motion.div>

        {/* Sección de CTA con imagen */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Aquí va la imagen */}
            <div className="aspect-square bg-black/50 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <img src="img/cap/CAMIONES.png" alt="" />
              </div>
            </div>
          </motion.div>
          
          <motion.div className="order-1 md:order-2" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-white">
              ¡No esperes más! <span className="text-[#9BBF5F]">Contrata hoy mismo.</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Mantente siempre alerta con las alarmas inteligentes. Que tus viajes transcurran de forma segura con nuestras Dashcams con IA.
            </p>
            <Link to={'/contacto'}>
            <button className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/30 transition-all duration-300">
              Solicitar información
            </button>
            </Link>
          </motion.div>
        </motion.div>



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
              "Acceso a video en tiempo real",
              "Registro de eventos en la nube",
              "Datos y Consola de Monitoreo",
              "Alertas inteligentes"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-[#1a1a1a]/50 border border-[#2a2a2a] rounded-lg p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[#9BBF5F] text-2xl mb-2">
                  {["👁️", "☁️", "📊", "⚠️"][index]}
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

export default Dashcam;