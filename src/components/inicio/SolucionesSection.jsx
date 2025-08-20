import React from 'react';
import { motion, useInView } from 'framer-motion';

const SolucionesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const productos = [
    {
      nombre: 'Ananta ERP',
      descripcion: 'Software ERP y Plataforma madre',
      imagen: '/img/cap/anantacap.png',
      destacado: true,
      link: '/plataforma-ananta',
    },
    {
      nombre: 'Varuna',
      descripcion: 'Tu herramienta de monitoreo inteligente',
      imagen: '/img/cap/varunacap.png',
      destacado: false,
      link: '#',
    },
    {
      nombre: 'Dashcam',
      descripcion: 'Seguridad con IA integrada',
      imagen: '/img/cap/DASHCAMS.png',
      destacado: true,
      link: '/dashcam',
    },
    {
      nombre: 'Equipos GPS',
      descripcion: 'Equipos de alta gama',
      imagen: '/img/cap/EQUIPOS.png',
      destacado: false,
      link: '/gps',
    },
    {
      nombre: 'Plataforma Robusta',
      descripcion: 'Plataforma de Rastreo',
      imagen: '/img/cap/RASTREO.png',
      destacado: true,
      link: '#',
    },
    {
      nombre: 'Monitoreo Activo',
      descripcion: 'Asistencia 24/7',
      imagen: '/img/cap/CAMIONES.png',
      destacado: false,
      link: '#',
    },
  ];

  // Variants para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div ref={ref} className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { delay: 0.3, className: 'top-1/4 left-1/4 w-64 h-64 bg-[#326a10]' },
          { delay: 0.5, className: 'bottom-1/3 right-1/4 w-96 h-96 bg-secondary' },
          { delay: 0.7, className: 'top-1/3 right-1/3 w-80 h-80 bg-[#8bda5a]' },
        ].map((circle, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: circle.delay }}
            className={`absolute rounded-full filter blur-[90px] ${circle.className}`}
          />
        ))}
      </div>

      {/* Contenido */}
      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Encabezado */}
        <motion.div className="text-center mb-16" variants={fadeInVariants}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
            Más de nuestras soluciones
          </h2>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-300">
            Somos una empresa comprometida con brindarte el mejor servicio en Software ERP y además ofrecemos soluciones con IA integrada
          </p>
        </motion.div>

        {/* Grid productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <motion.a
              key={index}
              href={producto.link}
              className={`relative rounded-xl overflow-hidden border border-[#2a2a2a] transition-all duration-300 hover:shadow-lg hover:shadow-[#9BBF5F]/20 group block ${
                producto.destacado ? 'md:col-span-2 h-80' : 'h-64'
              }`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Fondo imagen */}
              <div className="absolute inset-0">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90"></div>
              </div>

              {/* Efecto glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

              {/* Contenido */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{producto.nombre}</h3>
                <p className="text-gray-300">{producto.descripcion}</p>
              </div>

              {/* Borde hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#9BBF5F]/50 transition-all duration-500 pointer-events-none"></div>

              {/* Brillo hover */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SolucionesSection;
