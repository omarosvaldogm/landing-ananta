import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-8 px-6 relative overflow-hidden">
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]">
                ¡Síguenos!
              </span>
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SudSolutions" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-300 hover:text-[#9BBF5F] hover:border-[#9BBF5F] transition-all">
                  <FaFacebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/sud-solutions-sa-de-cv" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en LinkedIn" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-300 hover:text-[#9BBF5F] hover:border-[#9BBF5F] transition-all">
                  <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/sud_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-300 hover:text-[#9BBF5F] hover:border-[#9BBF5F] transition-all">
                  <FaInstagram size={18} />
              </a>
              <a href="https://youtube.com/@sudsolutions5163?si=Lwz0X5vv5TqZfTyo" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en YouTube" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-300 hover:text-[#9BBF5F] hover:border-[#9BBF5F] transition-all">
                  <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Menú */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Menú</h3>
            <ul className="space-y-3">
              <li><Link to={'/'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Inicio</Link></li>
              <li><Link to={'/nosotros'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Nosotros</Link></li>
              <li><Link to={'/ananta'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Ananta</Link></li>
              <li><Link to={'/contacto'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Contacto</Link></li>
              <li><Link to={'/'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Iniciar Sesión</Link></li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Productos</h3>
            <ul className="space-y-3">
              <li><Link to={'/ananta'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Ananta</Link></li>
              <li><Link to={'/dashcam'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Dashcam IA</Link></li>
              <li><Link to={'/gps'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">GPS</Link></li>
            </ul>
          </div>

          {/* Contacto y Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links</h3>
            <ul className="space-y-3 mb-8">
              <li><Link to={'/politicas'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Política de privacidad</Link></li>
              <li><Link to={'/terminos'} className="text-gray-300 hover:text-[#9BBF5F] transition-colors">Términos y condiciones</Link></li>
            </ul>
            <h3 className="text-xl font-bold mb-6 text-white">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <FaPhoneAlt className="mr-3 text-[#9BBF5F]" />
                <span>Cel: (+52) 993 430 6180</span>
              </li>
              <li className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-[#9BBF5F]" />
                <span>Correo: ventas@sudsolutions.mx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sud Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;