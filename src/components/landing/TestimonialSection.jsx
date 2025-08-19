import React from 'react';
import { motion, useInView } from 'framer-motion';

const TestimonialSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px]"
        ></motion.div>
      </div>

      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto max-w-3xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="relative z-10 pl-12 pt-6">
          {/* Comilla decorativa pegada al texto */}
          <motion.div 
            className="absolute -top-2 -left-2 text-[#9BBF5F] text-[6rem] md:text-[8rem] opacity-15 pointer-events-none select-none"
            variants={fadeInVariants}
            style={{ lineHeight: 0, zIndex: 0 }}
          >
            “
          </motion.div>

          {/* Testimonio */}
          <motion.blockquote 
            className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-8 relative"
            variants={itemVariants}
          >
            Con Ananta, dejamos de usar 4 programas distintos. Ahora todo está en un solo sistema y podemos tomar decisiones más rápido. La productividad de mi equipo aumentó un 30%.
          </motion.blockquote>
          
          {/* Autor */}
          <motion.div 
            className="text-[#9BBF5F] font-medium text-lg text-right"
            variants={itemVariants}
          >
            - Luis M., Gerente de PYME de transporte
          </motion.div>
        </div>
        
        {/* Indicador de confianza */}
        <motion.div 
          className="flex justify-center items-center mt-8 gap-2"
          variants={itemVariants}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              className="w-6 h-6 text-[#f0b429]"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
          <motion.span 
            className="text-gray-400 ml-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            5.0
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
