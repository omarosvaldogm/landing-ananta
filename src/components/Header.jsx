import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);
  const [resourcesSubmenuTimeout, setResourcesSubmenuTimeout] = useState(null);
  const [loginSubmenuTimeout, setLoginSubmenuTimeout] = useState(null);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMouseEnterProducts = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setIsProductsHovered(true);
  };

  const handleMouseLeaveProducts = () => {
    const timeout = setTimeout(() => {
      setIsProductsHovered(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  const handleMouseEnterResources = () => {
    if (resourcesSubmenuTimeout) {
      clearTimeout(resourcesSubmenuTimeout);
      setResourcesSubmenuTimeout(null);
    }
    setIsResourcesHovered(true);
  };

  const handleMouseLeaveResources = () => {
    const timeout = setTimeout(() => {
      setIsResourcesHovered(false);
    }, 300);
    setResourcesSubmenuTimeout(timeout);
  };

  const handleMouseEnterLogin = () => {
    if (loginSubmenuTimeout) {
      clearTimeout(loginSubmenuTimeout);
      setLoginSubmenuTimeout(null);
    }
    setIsLoginHovered(true);
  };

  const handleMouseLeaveLogin = () => {
    const timeout = setTimeout(() => {
      setIsLoginHovered(false);
    }, 300);
    setLoginSubmenuTimeout(timeout);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const toggleMobileResources = () => {
    setIsMobileResourcesOpen(!isMobileResourcesOpen);
  };

  const toggleMobileLogin = () => {
    setIsMobileLoginOpen(!isMobileLoginOpen);
  };

  // Función para redirigir a las páginas externas
  const redirectToExternalPage = (url) => {
    window.open(url, '_blank');
    setIsMenuOpen(false);
    setIsLoginHovered(false);
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 bg-black/20 md:rounded-full shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/img/LOGO2.png" alt="" className='h-14' />
          </div>

          {/* Menú de navegación - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={'/'} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to={'/nosotros'} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Menú desplegable de Productos */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                Productos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Submenú desplegable */}
              {isProductsHovered && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-black/80 backdrop-blur-md rounded-lg shadow-lg py-2 z-50 animate-fadeIn"
                  onMouseEnter={handleMouseEnterProducts}
                  onMouseLeave={handleMouseLeaveProducts}
                >
                  <Link 
                    to={'/dashcam'}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Dashcam IA
                  </Link>
                  <Link 
                    to={'/gps'} 
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    GPS
                  </Link>
                </div>
              )}
            </div>

            {/* Menú desplegable de Recursos */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnterResources}
              onMouseLeave={handleMouseLeaveResources}
            >
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                Recursos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Submenú desplegable */}
              {isResourcesHovered && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-black/80 backdrop-blur-md rounded-lg shadow-lg py-2 z-50 animate-fadeIn"
                  onMouseEnter={handleMouseEnterResources}
                  onMouseLeave={handleMouseLeaveResources}
                >
                  <Link 
                    to={'/guias-practicas'}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Guías prácticas
                  </Link>
                  <Link 
                    to={'/videos-institucionales'} 
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Videos Institucionales
                  </Link>
                </div>
              )}
            </div>
            
            <Link to={'/ananta'} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Ananta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to={'/contacto'} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Botones de acción - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnterLogin}
              onMouseLeave={handleMouseLeaveLogin}
            >
              <button className="flex items-center bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                Iniciar sesión
                <FiChevronDown className="ml-1" />
              </button>
              
              {/* Dropdown de Iniciar sesión */}
              {isLoginHovered && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-black/80 backdrop-blur-md rounded-lg shadow-lg py-2 z-50 animate-fadeIn"
                  onMouseEnter={handleMouseEnterLogin}
                  onMouseLeave={handleMouseLeaveLogin}
                >
                  <button 
                    onClick={() => redirectToExternalPage('https://rastreo.sudsolutions.mx')}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Plataforma de rastreo
                  </button>
                  <button 
                    onClick={() => redirectToExternalPage('https://www.ananta.com.mx')}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Ananta
                  </button>
                  <button 
                    onClick={() => redirectToExternalPage('https://www.varuna.com.mx')}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  >
                    Varuna
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menú móvil - Botón */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú móvil - Contenido */}
        <div 
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[1000px] opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to={'/'} 
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to={'/nosotros'} 
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <div className="py-2 border-b border-white/10">
              <button 
                onClick={toggleMobileProducts}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span>Productos</span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    to={'/dashcam'} 
                    className="block text-gray-400 hover:text-white transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashcam IA
                  </Link>
                  <Link 
                    to={'/gps'} 
                    className="block text-gray-400 hover:text-white transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    GPS
                  </Link>
                </div>
              </div>
            </div>

            {/* Menú desplegable móvil de Recursos */}
            <div className="py-2 border-b border-white/10">
              <button 
                onClick={toggleMobileResources}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span>Recursos</span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileResourcesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    to={'/guias-practicas'} 
                    className="block text-gray-400 hover:text-white transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Guías prácticas
                  </Link>
                  <Link 
                    to={'/videos-institucionales'} 
                    className="block text-gray-400 hover:text-white transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Videos Institucionales
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to={'/ananta'} 
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Ananta
            </Link>
            <Link 
              to={'/contacto'} 
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            
            {/* Dropdown móvil de Iniciar sesión */}
            <div className="py-2 border-b border-white/10">
              <button 
                onClick={toggleMobileLogin}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span>Iniciar sesión</span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isMobileLoginOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileLoginOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="ml-4 mt-2 space-y-2">
                  <button 
                    onClick={() => redirectToExternalPage('https://rastreo.sudsolutions.mx')}
                    className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 py-1"
                  >
                    Plataforma de rastreo
                  </button>
                  <button 
                    onClick={() => redirectToExternalPage('https://www.ananta.com.mx')}
                    className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 py-1"
                  >
                    Ananta
                  </button>
                  <button 
                    onClick={() => redirectToExternalPage('https://www.varuna.com.mx')}
                    className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 py-1"
                  >
                    Varuna
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;