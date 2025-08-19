import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Efectos de fondo futuristas */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-15"></div>
      </div> */}

      {/* Card Container */}
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500"></div>
          
          {/* Contenido */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                ¿Estás listo para la mejor solución de tu logística?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Con Ananta, lleva tu productividad al siguiente nivel.
            </p>
            <Link to={'/contacto'}>
              <button className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.02] group">
                ¡Agendar una demo!
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[80px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#73963C] rounded-full filter blur-[80px] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;