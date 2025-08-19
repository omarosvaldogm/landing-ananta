import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSettings, FiUsers, FiHeadphones } from 'react-icons/fi';

const PackageFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FiSettings className="w-8 h-8 text-[#9BBF5F]" />,
      title: "Elige tus 5 herramientas principales",
      description: "Personaliza tu ERP seleccionando los módulos que más necesites: facturación, inventario, contabilidad, nómina y más."
    },
    {
      icon: <FiUsers className="w-8 h-8 text-[#9BBF5F]" />,
      title: "Hasta 6 usuarios sin costo extra",
      description: "Colabora con tu equipo completo sin preocuparte por licencias adicionales."
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-[#9BBF5F]" />,
      title: "Soporte técnico 24/7",
      description: "Asistencia permanente por nuestro equipo de expertos cuando lo necesites."
    }
  ];

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
    <div className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]"
            variants={itemVariants}
          >
            Lo que incluye el Paquete PYMES
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Todo lo que necesitas para gestionar eficientemente tu negocio
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 relative overflow-hidden hover:border-[#9BBF5F]/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Efecto de gradiente */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
              
              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:border-[#9BBF5F] transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PackageFeatures;
