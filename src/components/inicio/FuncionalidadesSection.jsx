import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const FuncionalidadesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animaciones globales
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.25 }
      }
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" }
      }
    }
  };

  const features = [
    { name: "Requisiciones", description: "Digitaliza el proceso y elimina el uso de papel.", icon: "📝" },
    { name: "Órdenes de compra", description: "Gestiona tus compras fácilmente.", icon: "🛒" },
    { name: "Cotizaciones", description: "Genera cotizaciones con tu imagen empresarial.", icon: "💰" },
    { name: "Notas de venta", description: "Convierte cotizaciones a notas de venta en segundos.", icon: "🧾" },
    { name: "Facturación", description: "Convierte cotizaciones en facturas ilimitadas junto con sus complementos.", icon: "📑" },
    { name: "Notas de crédito", description: "Crea y administra tus notas de crédito.", icon: "💳" },
    { name: "Bancos", description: "Administra movimientos automáticamente o regístralos manualmente.", icon: "🏦" },
    { name: "Carta porte", description: "Emite cartas porte ilimitadas para respaldar tus viajes de traslado.", icon: "🚛" },
    { name: "Inventario", description: "Controla existencias con alertas por stock mínimo.", icon: "📦" },
    { name: "Activos con QR", description: "Controla la información de tus activos con un escaneo.", icon: "📱" },
    { name: "Tickets internos", description: "Da seguimiento a tareas y reportes internos.", icon: "🎫" },
    { name: "Mantenimientos", description: "Registra servicios y costos por unidad.", icon: "🔧" },
    { name: "Checklists", description: "Digitaliza formularios con campos personalizables.", icon: "✅" },
    { name: "Arrendamiento", description: "Administra unidades en renta por ubicación y estatus.", icon: "🏢" },
    { name: "Neumáticos y baterías", description: "Controla historial de cambios y estado.", icon: "🔋" },
    { name: "Control de combustible", description: "Optimiza consumo y carga por unidad.", icon: "⛽" },
    { name: "Bodegas", description: "Gestiona espacios y disponibilidad en tiempo real.", icon: "🏭" },
    { name: "EIR", description: "Consolida o desconsolida contenedores fácilmente.", icon: "📊" },
    { name: "Dashcam IA", description: "Visualiza en vivo desde Ananta.", icon: "📹" },
    { name: "CRM", description: "Administra ventas y proyectos.", icon: "👥" },
    { name: "Monitoreo activo", description: "Centraliza la supervisión de tu flotilla con alertas y reportes.", icon: "👁️" },
    { name: "Punto de venta", description: "Cobra, gestiona inventarios y factura en un solo lugar.", icon: "💲" },
    { name: "Viajes", description: "Gestiona servicios logísticos con reportes automáticos.", icon: "🚛" },
    { name: "Control de personal y asistencia", description: "Controla el personal y asistencia de tu empresa.", icon: "⏱️" },
    { name: "Producción", description: "Optimiza y controla tu producción de principio a fin.", icon: "🧰" }
  ];

  return (
    <section 
      ref={ref}
      className="bg-[#0a0a0a] py-16 overflow-hidden relative"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#326a10] rounded-full blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#8bda5a] rounded-full blur-[120px]"
        />
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants.container}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-light mb-4 text-[#9BBF5F]"
            variants={variants.item}
          >
            Todo lo que necesitas en un solo lugar
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            variants={variants.item}
          >
            Herramientas sin límites
          </motion.h1>
        </motion.div>

        {/* Grid de funcionalidades */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants.container}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={variants.item}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#121212] p-6 rounded-xl border border-[#1e1e1e] group-hover:border-[#9BBF5F]/50 transition-all duration-300 h-full flex flex-col items-center text-center shadow-md hover:shadow-[#9BBF5F]/10">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <p className="text-white font-medium mb-2">{feature.name}</p>
                
                {/* Tooltip */}
                <div 
                  role="tooltip"
                  className="absolute bottom-full mb-3 hidden group-hover:block w-64 bg-[#1a1a1a] text-gray-300 text-sm p-3 rounded-lg shadow-lg border border-[#2d2d2d] z-20"
                >
                  {feature.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#1a1a1a]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={variants.fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Link to="/funcionalidades">
            <motion.button 
              className="border border-[#9BBF5F] text-[#9BBF5F] font-bold py-3 px-8 rounded-full hover:bg-[#9BBF5F]/10 hover:shadow-lg hover:shadow-[#9BBF5F]/20 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explora nuestras funcionalidades
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FuncionalidadesSection;
