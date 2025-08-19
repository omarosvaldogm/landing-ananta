import React from 'react';
import Marquee from 'react-fast-marquee';

const AliadosDarkSection = () => {
  // Logos de empresas aliadas (duplicados para efecto continuo)
  const logos = [
    '/img/logos/telcel.png',
    '/img/logos/claro.png',
    '/img/logos/hk.png',
    '/img/logos/jimi.png',
    '/img/logos/suntech.png',
  ];

  // Duplicamos el array para el efecto de scroll infinito
  const duplicatedLogos = [...logos, ...logos];
  const tecnologias = [
    { name: 'Telcel', ruta: '/img/logos/telcel.png'},
    { name: 'Claro', ruta: '/img/logos/claro.png' },
    { name: 'Hk', ruta: '/img/logos/hk.png' },
    { name: 'Jimi', ruta: '/img/logos/jimi.png' },
    { name: 'Suntech', ruta: '/img/logos/suntech.png' },
  ];
  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Efectos de fondo futuristas */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#326a10] rounded-full filter blur-[100px] opacity-10"></div>
      </div> */}
      
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

        <Marquee autoFill gradient gradientColor='#0a0a0a' >
            {tecnologias.map((tecnologia, index) => (
              <div key={index} className='flex flex-col items-center justify-center p-10 rounded-xl hover:bg-gray-800/40  backdrop-blur-md md:mx-6'>
                <img src={tecnologia.ruta} alt="" className='h-10' />
                {/* <div className='text-9xl text-gray-400/50'>{tecnologia.icon}</div> */}

              </div>
            ))}
          </Marquee>


        {/* Llamado a la acción */}
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee 30s linear infinite;
          animation-delay: 15s;
        }
      `}</style>
    </div>
  );
};

export default AliadosDarkSection;