import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img
          src="/img/equipo.png"
          alt="Equipo Sud Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
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
              Nosotros
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Innovación y compromiso desde el sureste mexicano
          </p>
        </motion.div>
      </section>

      {/* Historia */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Nuestra{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              Historia
            </span>
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-justify text-lg">
            Somos una empresa ubicada en el sureste mexicano fundada en{" "}
            <span className="font-semibold text-[#9BBF5F]">2015</span>. En pocos años
            nos hemos profesionalizado y creado alianzas estratégicas que han impulsado
            un crecimiento sólido.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">
            Nos encargamos de la logística y seguridad de empresas dedicadas a la venta
            al detalle en varios estados. En el área de Monitoreo GPS, atendemos a
            compañías líderes en sectores como{" "}
            <span className="text-[#9BBF5F]">Oil & Gas</span>, alimentos y materiales.
          </p>
        </motion.div>
      </section>

      {/* Sud Solutions */}
      <section className=" py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
                Sud Solutions
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              En <span className="font-semibold text-[#9BBF5F]">2020</span> creamos el
              área de desarrollo, enfocada en dos mercados: empresas de monitoreo activo,
              para las que desarrollamos{" "}
              <span className="text-[#9BBF5F]">Varuna</span> —software que hoy integra su
              propio chat con IA— y empresas en general, a través de nuestro{" "}
              <span className="text-[#9BBF5F]">ERP Ananta</span>, cuya comercialización
              iniciamos a finales de 2024.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              Hemos dejado de crecer en GPS hacia clientes finales para enfocarnos en
              atender a empresas de rastreo a nivel global. Para ello, creamos una LLC en
              EE.UU. y una SAS en Colombia para el mercado sudamericano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-12 text-center shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Nuestra{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#4A6D1A]">
              Filosofía
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-justify">
            Con Ananta buscamos ayudar a las empresas a mejorar sus controles y
            procesos internos. Para nosotros, cada cliente B2B es más que un número: es
            un socio estratégico que debe encontrar soluciones reales en nuestro
            software.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;
