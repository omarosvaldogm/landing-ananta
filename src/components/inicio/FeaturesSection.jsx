import React, { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiLink, FiZap } from 'react-icons/fi';

// Componente memoizado para FeatureCard
const FeatureCard = memo(({ icon, title, description, gradient, variants }) => (
  <motion.div
    className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 relative overflow-hidden hover:border-[#9BBF5F]/30 transition-all duration-300 group"
    variants={variants}
  >
    {/* Efecto gradiente de hover */}
    <div
      className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
    ></div>

    {/* Contenido */}
    <div className="relative z-10">
      <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 border border-[#2a2a2a] group-hover:border-[#9BBF5F] transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
          {title}
        </span>
      </h3>

      <p className="text-gray-400">{description}</p>
    </div>

    {/* Glow en hover */}
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
  </motion.div>
));

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FiCpu className="w-8 h-8 text-[#9BBF5F]" />,
      title: 'Control total',
      description:
        'Si tu negocio requiere una solución específica que aún no ofrecemos, nosotros la desarrollamos para ti.',
      gradient: 'from-[#326a10] to-[#8bda5a]',
    },
    {
      icon: <FiLink className="w-8 h-8 text-[#9BBF5F]" />,
      title: 'Optimiza',
      description:
        'No sólo gestionas todo desde una única plataforma, también integra otros servicios que ya tengas contratados, como tu sistema de rastreo.',
      gradient: 'from-[#4A6D1A] to-[#73963C]',
    },
    {
      icon: <FiZap className="w-8 h-8 text-[#9BBF5F]" />,
      title: 'Sin límites',
      description:
        'Con Ananta no hay límites, ni costos ocultos. Todas las herramientas y módulos que se adapten están incluidas sin costos extras.',
      gradient: 'from-[#8bda5a] to-[#326a10]',
    },
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div
      ref={ref}
      className="bg-[#0a0a0a] py-16 md:py-20 px-6 relative overflow-hidden"
    >
      {/* Fondos animados */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { delay: 0.3, opacity: 0.1, size: 'w-64 h-64', pos: 'top-1/4 left-1/4', color: 'bg-[#326a10]', blur: 'blur-[90px]' },
          { delay: 0.5, opacity: 0.05, size: 'w-96 h-96', pos: 'bottom-1/3 right-1/4', color: 'bg-[#8bda5a]', blur: 'blur-[100px]' },
        ].map((bg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: bg.opacity } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: bg.delay }}
            className={`absolute ${bg.pos} ${bg.size} ${bg.color} rounded-full filter ${bg.blur}`}
          ></motion.div>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} variants={itemVariants} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
