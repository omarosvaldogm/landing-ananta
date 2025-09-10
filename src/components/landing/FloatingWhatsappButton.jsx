import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsappButton = () => {
  // URL de WhatsApp con el mensaje predeterminado
  const whatsappUrl = "https://wa.me/9932779253?text=%C2%A1Hola!%20me%20interesa%20saber%20m%C3%A1s%20sobre%20el%20ERP%20%F0%9F%8C%90";

  // Manejador del clic para el ícono de WhatsApp
  const handleIconClick = () => {
    // Abre la URL de WhatsApp directamente en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      <button
        onClick={handleIconClick}
        className="bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Chatear con un asesor por WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FloatingWhatsappButton;