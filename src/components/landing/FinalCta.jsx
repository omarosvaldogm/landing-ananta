import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FinalCta = () => {
  // Referencia para detectar cuándo el componente está en pantalla
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // Se activa cuando el 20% del componente está visible

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.4 },
    },
  };

  return (
    <div ref={ref} className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      {/* Fondo decorativo con animación suave */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#9BBF5F] rounded-full blur-[120px] opacity-10"
          animate={isInView ? { scale: 1.1 } : { scale: 0.9 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[28rem] h-[28rem] bg-[#4A6D1A] rounded-full blur-[160px] opacity-5"
          animate={isInView ? { scale: 1.05 } : { scale: 0.95 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-6xl bg-gradient-to-b from-[#121212] to-[#181818] border border-[#2a2a2a] rounded-3xl p-10 md:p-16 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative overflow-hidden backdrop-blur-sm"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row">
          {/* Columna izquierda - Contenido */}
          <div className="md:w-2/3 md:pr-10">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-left"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.span className="block text-white" variants={itemVariants}>
                Más control.
              </motion.span>
              <motion.span className="block text-white" variants={itemVariants}>
                Más productividad.
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#c8ec93] via-[#9BBF5F] to-[#4A6D1A] bg-clip-text text-transparent"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
                }}
              >
                Más crecimiento.
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed text-left"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.4 } },
              }}
            >
              El Paquete PYMES de <span className="text-white font-medium">Ananta</span> reúne las herramientas que usan las grandes empresas... adaptadas a tu tamaño y presupuesto.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
              }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-semibold py-4 px-12 rounded-full text-lg md:text-xl relative group overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(155, 191, 95, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Comenzar ahora
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Columna derecha - Logo (animación más llamativa) */}
          <motion.div
            className="md:w-1/3 flex items-center justify-center mt-10 md:mt-0"
            variants={logoVariants}
          >
            <div className="rounded-xl w-full max-w-xs h-64 flex items-center justify-center">
              <motion.img
                src="/img/LOGOBLANCO.png"
                alt="Logo Ananta"
                className="max-w-full max-h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalCta;