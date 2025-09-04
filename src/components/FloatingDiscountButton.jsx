import React from 'react';

const FloatingDiscountButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="/pymes"
        className="bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] hover:from-[#73963C] hover:to-[#4A6D1A] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
      >
        <span className="text-lg font-bold">50% DE DESCUENTO</span>
        <span className="block text-sm">en implementación</span>
      </a>
    </div>
  );
};

export default FloatingDiscountButton;