import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const StatsCounter = () => {
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

  const stats = [
    { value: 10, suffix: '+', label: 'Experiencia', duration: 2 },
    { value: 60, suffix: '+', label: 'Clientes', duration: 2.5 },
    { value: 1.2, suffix: 'k+', label: 'Vehículos', decimal: 1, duration: 3 },
    { value: 3, suffix: '+', label: 'Países de operación', duration: 1.5 }
  ];

  return (
    <div id="stats-counter" className="bg-[#0a0a0a] py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] border border-[#2a2a2a] hover:border-[#9BBF5F] transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                {startCounters ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimal || 0}
                    duration={stat.duration}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
