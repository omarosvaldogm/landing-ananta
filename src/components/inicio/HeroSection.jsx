import React, { useState, useEffect, Suspense } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import DarkVeil from '../DarkVeil';
import { Link } from 'react-router-dom';

// StatsCounter cargado de forma diferida
const StatsCounter = React.lazy(() => import('./StatsCounter'));

const HeroSection = () => {
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-counter');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
          setStartCounters(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variantes más ligeras
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-between overflow-hidden relative">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      <LazyMotion features={domAnimation}>
        {/* Contenido principal */}
        <m.div
          className="container mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 py-16 mt-16 md:mt-16"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Lado izquierdo: Texto */}
          <m.div
            className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            variants={fadeUp}
          >
            <m.h1
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]"
              variants={fadeUp}
            >
              Ananta ERP
              <span className="block text-white text-2xl md:text-3xl font-normal mt-2">
                y plataforma madre inteligente
              </span>
            </m.h1>

            <m.p
              className="text-lg md:text-xl font-light mb-8 max-w-lg mx-auto md:mx-0 text-gray-300"
              variants={fadeUp}
            >
              Software integral que optimiza y centraliza todos los procesos de tu empresa,
              con una plataforma intuitiva y escalable que crece junto a tu negocio.
            </m.p>

            <m.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={fadeUp}
            >
              <Link to={'/contacto'}>
                <button className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-3 px-8 rounded-full hover:shadow-md hover:shadow-[#4A6D1A]/30 transition-all duration-300 transform hover:scale-[1.02]">
                  Agendar una demo
                </button>
              </Link>
            </m.div>
          </m.div>

          {/* Lado derecho: Mockup futurista */}
          <m.div
            className="w-full md:w-[55%] flex justify-center relative"
            variants={fadeUp}
          >
            <div className="relative w-full max-w-2xl">
              <div
                className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-xl transition-all duration-700"
                style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
              >
                <div className="bg-[#0d0d0d] py-2 px-4 flex gap-2 border-b border-[#2a2a2a]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5c8a]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f0b429]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#38d86b]"></div>
                </div>

                <div className="w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster="/video/poster.jpg"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  >
                    <source src="/video/VIDEOERP.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>

      {/* StatsCounter cargado solo cuando hace scroll */}
      <div id="stats-counter" className="w-full relative z-10 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          <Suspense fallback={null}>
            {startCounters && <StatsCounter />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
