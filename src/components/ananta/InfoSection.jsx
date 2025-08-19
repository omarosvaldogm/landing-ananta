import React from 'react';

const InfoSection = () => {
  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Card Container */}
      <div className="container mx-auto">
        <div className=" p-8 md:p-12 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500"></div>
          
          {/* Contenido en dos columnas */}
          <div className="relative z-10 flex flex-col md:flex-row items-center">

            {/* Columna derecha - Logo (reemplaza con tu imagen real) */}
            <div className="md:w-1/3 flex justify-center">
              <div className="w-[480px] h-[480px] flex items-center justify-center mr-10">
                {/* Espacio para el logo - reemplaza el div por tu imagen */}
                <img src="/img/imglap.png" alt="" />
              </div>
            </div>
            {/* Columna izquierda - Texto */}
            <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                  ¿PARA QUÉ ME SIRVE ANANTA?
                </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                  Ananta optimiza cada aspecto operativo de tu empresa.

              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Centraliza todas las operaciones de tu empresa, facilita la gestión de todas las áreas y controla todo desde cualquier dispositivo.
Ananta te ayuda a identificar embudos de productividad y eliminarlos con una plataforma intuitiva que se adapta a las necesidades de cualquier empresa.
              </p>
              
              <button className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.02] group">
                Más información
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            
          </div>

          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[80px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#73963C] rounded-full filter blur-[80px] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;