import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden py-12">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0a0a0a]"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              Términos y Condiciones
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Servicio de Localización Vehicular Sud Solutions
          </p>
        </motion.div>
      </section>

      {/* Advertencia importante */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-start mb-6">
            <div className="bg-red-500/20 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-400">ADVERTENCIA IMPORTANTE</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            ANTES DE UTILIZAR ESTE SERVICIO LEA CUIDADOSAMENTE. Usted, como usuario del Servicio, 
            reconoce que el mismo se proporciona «tal cual», por lo que Sud Solutions, S.A. de C.V. 
            ("Sud") renuncia a cualquier responsabilidad por daños, costos o gastos que puedan surgir 
            como resultado del uso del Servicio.
          </p>
        </motion.div>
      </section>

      {/* Descripción del servicio */}
      <section className="py-12 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-y border-[#2a2a2a]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
                1. Descripción del Servicio AVL
              </span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4 mt-1">
                  <span className="text-[#9BBF5F] font-bold">1</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  El Servicio permite la localización del Equipo GPS instalado en el vehículo indicado por el Cliente 
                  y su proyección sobre un mapa digital en una interfaz Web.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4 mt-1">
                  <span className="text-[#9BBF5F] font-bold">2</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  El Servicio permite la obtención de indicadores de medición del vehículo así como el envío de comandos 
                  o instrucciones desde la interfaz Web de Sud.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4 mt-1">
                  <span className="text-[#9BBF5F] font-bold">3</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  AVL está diseñado para la localización del Equipo GPS instalado en el vehículo que el Cliente elija, 
                  de ningún modo para la localización de personas ni la recuperación de vehículos.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4 mt-1">
                  <span className="text-[#9BBF5F] font-bold">4</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Cada localización o acción remota estará sujeta a que el Equipo GPS instalado en el vehículo 
                  cuente con carga de batería suficiente, línea activa y se encuentre dentro de la cobertura.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4 mt-1">
                  <span className="text-[#9BBF5F] font-bold">5</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sud pone a disposición del cliente un Call Center de atención a clientes con número 
                  <span className="text-[#9BBF5F]"> +529939800228</span> y el correo 
                  <span className="text-[#9BBF5F]"> contacto@sudsolutions.mx</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Telecomandos y paro de motor */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              2. Telecomandos y Paro de Motor
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              El uso de las funcionalidades y telecomandos del Servicio AVL son responsabilidad del Cliente. 
              En caso de que el Cliente decida realizar paro de motor al equipo GPS instalado en el vehículo, 
              Sud no asume ninguna responsabilidad de daños que puedan ser ocasionados a los ocupantes, 
              al vehículo, a su carga, cualquiera que este sea y/o a terceros.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Instalación inicial */}
      <section className="py-12 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-y border-[#2a2a2a]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
                3. Instalación Inicial del Equipo GPS
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Proceso de instalación</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>La instalación podrá realizarse en cualquier lugar dentro del territorio nacional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>El instalador contactará al Cliente para definir lugar, fecha y horario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>Sólo podrá ser solicitada por personas designadas por el Cliente</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Requisitos y condiciones</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>Sólo instaladores autorizados por Sud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>Equipos GPS autorizados y homologados para operar en la red de Telcel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>SIM Cards provistas por Sud para tal efecto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9BBF5F] mr-2">•</span>
                    <span>Todos los servicios de instalación tienen un costo adicional</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios en campo */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              4. Servicios en Campo
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Cualesquiera servicios subsecuentes a la Instalación, tales como reinstalación, revisión, 
              desinstalación y/o reubicación de un Equipo GPS en el vehículo definido por el Cliente, 
              serán considerados como "Servicios en Campo".
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Condiciones de servicio</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>Todos los Servicios en Campo tienen costo adicional (excepto garantías)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>Se realizarán en lugar, fecha y horario que Cliente y Sud definan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>Sólo podrán ser solicitados por personas designadas por el Cliente</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Restricciones</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>Sólo con marcas y modelos de Equipos GPS autorizados por Sud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>Sólo con SIM Cards provistas por Telcel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] mr-2">•</span>
                  <span>No se realizarán si el Cliente presenta adeudos</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Garantías */}
      <section className="py-12 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-y border-[#2a2a2a]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
                5. Garantías
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#9BBF5F]">Instalación y Servicios</h3>
                </div>
                <p className="text-gray-300">
                  La Instalación y los Servicios en Campo tienen garantía de 45 días naturales a partir 
                  de la fecha de Instalación o de prestación del Servicio en Campo, según corresponda.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#9BBF5F]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#9BBF5F]">Equipos</h3>
                </div>
                <p className="text-gray-300">
                  La garantía de equipos provistos por Sud al Cliente se ajustará a los términos y condiciones 
                  de la garantía provista por el fabricante de dichos equipos.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 rounded-xl p-6 mt-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-500/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-400">Pérdida de garantía</h3>
              </div>
              <p className="text-gray-300">
                En caso de que la Instalación o el Equipo GPS sean manipulados por personal distinto al autorizado 
                por Sud o el Equipo GPS sea utilizado de forma distinta a sus especificaciones, la garantía dejará 
                de surtir efectos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsabilidades */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              Responsabilidades
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-[#9BBF5F]">Del Cliente</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Seguir el procedimiento de Instalación y/o Servicios en Campo indicado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Responsable en caso de robo o extravío del Equipo GPS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Notificar y dar seguimiento con autoridades en caso de robo o extravío del vehículo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Otorgar al Call Center usuario y contraseña para identificación</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-[#9BBF5F]">De Sud Solutions</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Brindar el Servicio AVL conforme a lo establecido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Call Center de atención: +5299398080228 y monitoreo@sudsolutions.mx</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>No se hace responsable por ocupantes, valor del vehículo o carga</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BBF5F] font-bold mr-2">•</span>
                  <span>Disponer de una red de instaladores capacitados</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default TermsAndConditions;