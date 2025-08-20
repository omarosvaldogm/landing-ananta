import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden">
      {/* Fondo decorativo con gradientes difuminados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full blur-[120px] opacity-15"></div>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden">
          {/* Brillo hover */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-3xl opacity-0 hover:opacity-10 blur-2xl transition-opacity duration-500"></div>

          {/* Contenido */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                ¿Listo para llevar tu logística al siguiente nivel?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Con <span className="font-semibold text-[#9BBF5F]">Ananta</span>, tu productividad se transforma en resultados.
            </p>

            <Link to="/contacto">
              <button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-[#9BBF5F]/20 hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.05]">
                ¡Agendar una demo!
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#9BBF5F] rounded-full blur-[100px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#73963C] rounded-full blur-[100px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
