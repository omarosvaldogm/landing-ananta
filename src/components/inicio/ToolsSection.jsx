import React, { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variantes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="bg-[#0a0a0a] md:min-h-screen flex items-center justify-center py-16 overflow-hidden relative"
    >
      {/* Efectos de fondo */}
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full blur-[90px]"
        />
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[100px]"
        />
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#8bda5a] rounded-full blur-[80px]"
        />

        {/* Contenido */}
        <m.div
          className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Texto */}
          <m.div
            className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            variants={containerVariants}
          >
            <m.h2
              className="text-2xl md:text-3xl font-light mb-4 text-[#9BBF5F]"
              variants={itemVariants}
            >
              Herramientas flexibles y poderosas
            </m.h2>

            <m.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
              variants={itemVariants}
            >
              Software ERP y Plataforma madre
            </m.h1>

            <m.p
              className="text-lg md:text-xl font-light mb-8 max-w-lg mx-auto md:mx-0 text-gray-300 text-justify"
              variants={itemVariants}
            >
              Ananta es un software ERP y plataforma madre que centraliza todas
              las operaciones de tu empresa en un solo lugar. Ofrece herramientas
              flexibles y personalizables para gestionar combustible,
              mantenimiento, inventarios, ventas y más, brindando control total
              y eficiencia para que tu negocio crezca.
            </m.p>

            <m.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link to={"/contacto"}>
                <m.button
                  className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/30 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(155,191,95,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contacta con un ejecutivo
                </m.button>
              </Link>
            </m.div>
          </m.div>

          {/* Logo */}
          <m.div
            className="w-full md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/img/LOGOANANTA.png"
              alt="Logo Ananta"
              className="w-[60%] opacity-10 md:opacity-40"
              loading="lazy"
            />
          </m.div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default ToolsSection;
