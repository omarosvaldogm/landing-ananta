import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

function AliadosTicker() {
  const tecnologias = [
    { name: 'Telcel', ruta: '/img/logos/telcel.png'},
    { name: 'Claro', ruta: '/img/logos/claro.png' },
    { name: 'Hk', ruta: '/img/logos/hk.png' },
    { name: 'Jimi', ruta: '/img/logos/jimi.png' },
    { name: 'Suntech', ruta: '/img/logos/suntech.png' },
  ];
  
  return (
    <div>
        <div className=' mx-auto   lg:px-8 relative z-10 bg-[#0a0a0a]'>
          <Marquee autoFill gradient gradientColor='#0a0a0a' >
            {tecnologias.map((tecnologia, index) => (
              <div key={index} className='flex flex-col items-center justify-center p-10 rounded-xl hover:bg-gray-800/40  backdrop-blur-md md:mx-6'>
                <img src={tecnologia.ruta} alt="" className='h-10' />
                {/* <div className='text-9xl text-gray-400/50'>{tecnologia.icon}</div> */}

              </div>
            ))}
          </Marquee>
      </div>
    </div>
  )
}

export default AliadosTicker