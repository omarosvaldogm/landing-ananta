import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Política de Privacidad
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Comprometidos con la protección de tus datos
          </p>
        </motion.div>
      </section>

      {/* Introducción */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-gray-300 mb-8 leading-relaxed text-lg text-justify">
            Sud Solutions S.A.S. pone a su disposición el presente AVISO DE PRIVACIDAD de conformidad 
            con lo previsto en la "Ley de Protección de Datos Personales", así como en el reglamento 
            correspondiente, los cuales son vigentes y aplicables en el territorio colombiano.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">
            Este aviso describe los datos personales que recopilamos, cómo los usamos y compartimos, 
            así como las opciones que usted tiene con respecto a ellos. Le recomendamos que lo lea 
            detalladamente ya que es aplicable por el simple uso o acceso a cualquiera de las páginas 
            y aplicaciones web o móviles, suscripción a membresías, acceso a cursos o talleres, 
            softwares y aplicaciones en general que integran el sitio www.sudsolutions.mx por lo que 
            entenderemos que acepta el presente aviso de privacidad y acuerda en obligarse en su cumplimiento.
          </p>
        </motion.div>
      </section>

      {/* Responsable */}
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
                Responsable del Tratamiento
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg text-justify">
              Sud Solutions S.A.S. (en lo sucesivo Sud Solutions), es el único responsable del tratamiento 
              de los datos personales que los usuarios y suscriptores proporcionan al registrarse y 
              suscribirse en alguna de las membresías que ofrecemos, así como de los datos que proporcione 
              para el acceso a los cursos o talleres de su elección.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              La seguridad es muy importante para nosotros, por lo que estamos comprometidos con la 
              protección de sus datos personales manteniendo las más altas técnicas y medidas de seguridad, 
              tanto físicas, como administrativas y legales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Datos recopilados */}
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
              Datos Personales Recopilados
            </span>
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">1. Información básica</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              Los datos personales que Sud Solutions puede recopilar de usted al crear una cuenta, 
              acceder a un curso y/o taller, de manera enunciativa más no limitativa son:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 text-lg">
              <li className="mb-2">Nombre</li>
              <li className="mb-2">Email</li>
              <li>Número de teléfono</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">2. Información de pago</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              Si usted desea contratar alguno de nuestros planes, Sud Solutions únicamente recabará 
              para el procesamiento de pago los siguientes datos:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg">
              <li className="mb-2">Método de pago</li>
              <li className="mb-2">Número de la tarjeta bancaria con la que desea efectuar el pago</li>
              <li className="mb-2">Código CVC</li>
              <li className="mb-2">Fecha de caducidad de la tarjeta bancaria</li>
              <li>Medios de pago y país de compra</li>
            </ul>
            <p className="text-gray-300 mt-4 leading-relaxed text-lg text-justify">
              Estos datos <span className="font-semibold text-[#9BBF5F]">NO</span> serán almacenados o utilizados por Sud Solutions. 
              Serán utilizados únicamente por la empresa procesadora de pagos que usted seleccione dentro 
              de las opciones que ofrecemos para ello.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Finalidades */}
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
                Finalidades del Tratamiento
              </span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-lg text-justify">
              Los datos personales que Sud Solutions recabe serán utilizados para atender las siguientes finalidades:
            </p>
            
            <ul className="list-disc pl-6 text-gray-300 mb-6 text-lg">
              <li className="mb-3">Crear y registrar su cuenta en www.sudsolutions.mx así como hacerle llegar información sobre la misma.</li>
              <li className="mb-3">Identificar su tipo de plan y otorgarle los beneficios que usted obtiene por las características de su suscripción.</li>
              <li className="mb-3">Brindarle correctamente los productos, servicios y beneficios que solicite o suscriba con nosotros.</li>
              <li>Integrar bases de datos de uso interno, así como expedientes y sistemas necesarios para la correcta operación del sitio web.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 mt-8 text-[#9BBF5F]">Finalidades secundarias</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              De manera adicional, se podrán utilizar sus datos personales para:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg">
              <li className="mb-2">Mercadotecnia, publicidad y prospección comercial</li>
              <li className="mb-2">Ofrecerle otros productos y servicios propios de Sud Solutions</li>
              <li className="mb-2">Remitirle promociones de otros bienes, servicios y/o productos</li>
              <li className="mb-2">Realizar análisis estadísticos y generación de modelos de información</li>
              <li>Hacerlo participe en encuestas, sorteos y promociones</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Derechos ARCO */}
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
              Tus Derechos ARCO
            </span>
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Limitación de uso de datos</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg text-justify">
              Usted en cualquier momento podrá limitar el uso o divulgación de sus datos personales 
              enviando un correo electrónico a <span className="text-[#9BBF5F]">contacto@sudsolutions.co</span> indicándonos 
              en el cuerpo del correo su nombre completo y que dato desea que no sea divulgado.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Ejercicio de derechos ARCO</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              En términos de la normatividad aplicable, Usted tiene derecho en todo momento a acceder, 
              actualizar, corregir y tener confidencialidad sobre su información personal. También puede 
              pedir que dejemos de enviarle publicidad, ofertas y promociones, suprimir sus datos y 
              oponerse a que usemos sus datos para una o varias finalidades.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
              Para ejercer los Derechos ARCO, usted deberá enviarnos solicitud al correo electrónico 
              <span className="text-[#9BBF5F]"> contacto@sudsolutions.co</span> identificándose con la siguiente información:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg">
              <li className="mb-2">Correo electrónico registrado en la plataforma</li>
              <li className="mb-2">Nombre de usuario o seudónimo registrado</li>
              <li className="mb-2">Número telefónico u otro medio para comunicarle la respuesta</li>
              <li>Descripción de la información sobre la que está tratando de ejercer sus derechos ARCO</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Más información */}
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
                Información Adicional
              </span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Transferencia de datos</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                Sud Solutions puede divulgar su información a las autoridades competentes en términos 
                de la legislación aplicable; cualquier transferencia de sus datos personales sin 
                consentimiento se realizará de acuerdo al Artículo 37 de la LFPDPPP.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Cookies y Web Beacons</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg text-justify">
                Hacemos de su conocimiento que contamos con tecnologías electrónicas (cookies y web beacons) 
                que nos permiten recabar datos de su actividad de manera electrónica y simultánea al tiempo 
                que usted accede a nuestras plataformas.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#9BBF5F]">Modificaciones</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones 
                por nuevos requerimientos legales, necesidades propias de Sud Solutions, por los cursos 
                o talleres, productos o servicios actuales o futuros que ofrecemos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;