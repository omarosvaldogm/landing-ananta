import React from 'react';
import Marquee from 'react-fast-marquee';

const AliadosDarkSection = () => {
  // Logos de empresas aliadas
  const aliados = [
    { name: 'Telcel', ruta: '/img/logos/telcel.png' },
    { name: 'Claro', ruta: '/img/logos/claro.png' },
    { name: 'Hk', ruta: '/img/logos/hk.png' },
    { name: 'Jimi', ruta: '/img/logos/jimi.png' },
    { name: 'Suntech', ruta: '/img/logos/suntech.png' },
  ];

  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
              Empresas Aliadas
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Construimos alianzas para mejorar nuestro servicio
          </p>
        </div>

        {/* Logos en movimiento */}
        <Marquee autoFill gradient gradientColor="#0a0a0a" speed={40}>
          {aliados.map((aliado, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-10 rounded-xl hover:bg-gray-800/40 backdrop-blur-md md:mx-6 transition"
            >
              <img src={aliado.ruta} alt={`Logo de ${aliado.name}`} className="h-10" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AliadosDarkSection;
