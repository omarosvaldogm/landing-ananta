import React from 'react';

const FixedAdvisorBar = () => {
  const whatsappUrl = "https://wa.me/9932779253?text=%C2%A1Hola!%20me%20interesa%20saber%20m%C3%A1s%20sobre%20el%20ERP%20%F0%9F%8C%90";

  const handleClick = () => {
    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white py-2 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className="text-sm md:text-base font-medium">
            ¿Necesitas ayuda? Habla con uno de nuestros asesores
          </span>
          <button 
            onClick={handleClick}
            className="bg-white text-[#4A6D1A] px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm"
            aria-label="Chatear con un asesor de ERP a través de WhatsApp"
          >
            Chatear con un asesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedAdvisorBar;