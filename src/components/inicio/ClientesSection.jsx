import React from "react";
import { motion, useInView } from "framer-motion";

// ⭐ Datos centralizados (puedes mover esto a un archivo separado si crece mucho)
const testimonios = [
  {
    logo: "/img/transportes-lemon-logo.png",
    nombre: "Ing. Rigoberto Marín",
    empresa: "Transportes Lemon",
    testimonio:
      "Con Sud hemos podido recuperar unidades por robo y además con su software Ananta y Varuna, sus controles logísticos y administrativos han sido de gran ayuda en la empresa.",
    destacado: true,
  },
  {
    logo: "/img/consorcio-lemon.jpeg",
    nombre: "Ing. Eduardo Fajardo",
    empresa: "Consorcio Lemon",
    testimonio:
      "Sud Solutions es una empresa profesional. Nos gusta que están disponibles las 24 horas, no solo para emergencias, sino también para resolver dudas sobre la plataforma. Se integró la plataforma de rastreo con su software Ananta, y hemos logrado mejorar en el control de gastos.",
    destacado: false,
  },
  {
    logo: "/img/ais-logo.png",
    nombre: "Ing. Marroquín",
    empresa: "All in Services",
    testimonio:
      "Hemos probado otros productos y servicios, pero con Sud logramos encontrar un proveedor profesional, con un servicio de calidad. Vale la pena cada peso que se paga con ellos. Su servicio de 24hrs, de Dashcam IA y Desarrollo de Software, son sin duda el punto de lanza.",
    destacado: true,
  },
];

// 🎬 Animaciones reutilizables
const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  },
};

const ClientesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden"
    >
      {/* 🔵 Fondos animados */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { delay: 0.3, className: "top-1/4 left-1/4 w-64 h-64" },
          { delay: 0.5, className: "bottom-1/3 right-1/4 w-96 h-96" },
        ].map((circle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: circle.delay }}
            className={`absolute ${circle.className} bg-[#326a10] rounded-full filter blur-[90px]`}
          />
        ))}
      </div>

      {/* 📌 Contenido */}
      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants.container}
      >
        {/* 📝 Encabezado */}
        <motion.div className="text-center mb-16" variants={variants.fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
            Nuestros clientes
          </h2>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-300">
            Juntos, avanzamos hacia la excelencia y el crecimiento.
          </p>
        </motion.div>

        {/* 💬 Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden p-8 border border-[#2a2a2a] bg-gradient-to-b from-[#121212] to-[#0a0a0a] transition-all duration-300 hover:shadow-lg hover:shadow-[#9BBF5F]/10"
              variants={variants.item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(155, 191, 95, 0.1)",
              }}
            >
              {/* 🌈 Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-secondary rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500 z-0" />

              <div className="relative z-10 h-full flex flex-col">
                {/* 👤 Header */}
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg flex items-center justify-center p-2 border border-[#2a2a2a] mr-4">
                    <img
                      src={t.logo}
                      alt={`Logo ${t.empresa}`}
                      className="max-h-12 max-w-[3rem] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{t.nombre}</p>
                    <p className="text-[#9BBF5F] text-sm">{t.empresa}</p>
                  </div>
                </motion.div>

                {/* 💭 Testimonio */}
                <blockquote className="text-gray-300 flex-grow mb-6 italic relative pl-6">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#9BBF5F] to-[#326a10] rounded-full"></div>
                  {t.testimonio}
                </blockquote>

                {/* ⭐ Rating */}
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-[#f0b429]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: 0.6 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">5.0</span>
                </motion.div>
              </div>

              {/* 🟩 Hover border */}
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent hover:border-[#9BBF5F]/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientesSection;
