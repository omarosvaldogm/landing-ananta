import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGlobe, FiLayers, FiShield, FiZap } from 'react-icons/fi';

const BriefPresentation = () => {
  const features = [
    { icon: <FiLayers className="w-6 h-6 text-[#9BBF5F]" />, text: "Todo en una sola plataforma web" },
    { icon: <FiZap className="w-6 h-6 text-[#9BBF5F]" />, text: "Procesos automatizados" },
    { icon: <FiShield className="w-6 h-6 text-[#9BBF5F]" />, text: "Datos organizados y seguros" },
    { icon: <FiGlobe className="w-6 h-6 text-[#9BBF5F]" />, text: "Acceso desde cualquier lugar" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Detecta cuando el componente está visible
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#326a10] rounded-full blur-[140px] opacity-20"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center my-24"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Título */}
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold mb-6"
          variants={itemVariants}
        >
          <span className="text-white">Con Ananta, </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
            simplifica tu administración
          </span>
        </motion.h2>

        {/* Descripción */}
        <motion.p 
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Organiza tus datos y automatiza procesos para que tu negocio sea más productivo y rentable.
        </motion.p>

        {/* Tarjetas de características */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-[#2a2a2a] bg-white/5 backdrop-blur-md hover:border-[#9BBF5F]/40 transition-all duration-300 flex items-start gap-4"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BriefPresentation;
