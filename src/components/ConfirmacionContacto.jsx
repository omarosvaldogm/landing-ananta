import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConfirmacionContacto = () => {
  const { id } = useParams();
  const [contactoData, setContactoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactoData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/uuid/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del contacto');
        }
        const data = await response.json();
        setContactoData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactoData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9BBF5F]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center p-6">
        <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 max-w-2xl w-full">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-2xl font-bold text-white mt-4">Error al cargar la confirmación</h2>
            <p className="text-gray-400 mt-2">{error}</p>
            <p className="text-gray-500 mt-4">ID de contacto: {id}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl mt-24">
        <motion.div 
          className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-[#326a10] to-[#8bda5a] p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              ¡Gracias por contactarnos!
            </h1>
            <p className="text-white/90 mt-2">Hemos recibido tu información correctamente</p>
          </div>
          
          {/* Contenido */}
          <div className="p-8">
            <div className="text-center mb-8">
              <svg className="w-20 h-20 mx-auto text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h2 className="text-xl font-bold text-white mt-4">Tu mensaje ha sido enviado con éxito</h2>
              <p className="text-gray-300 mt-2">
                Hemos recibido tu información de contacto y nos pondremos en contacto contigo a la brevedad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Información del usuario */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Tus datos de contacto
                </h2>
                
                <div className="space-y-3 text-gray-300">
                  <p><span className="font-semibold">Nombre:</span> {contactoData.nombre}</p>
                  <p><span className="font-semibold">Correo:</span> {contactoData.correo}</p>
                  <p><span className="font-semibold">Teléfono:</span> {contactoData.telefono}</p>
                  <p><span className="font-semibold">Empresa:</span> {contactoData.empresa || 'No especificada'}</p>
                  <p><span className="font-semibold">País:</span> {contactoData.nombre_pais || 'No especificado'}</p>
                </div>
              </div>
              
              {/* Detalles del mensaje */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Detalles de tu consulta
                </h2>
                
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Producto de interés:</span>
                      <span className="font-semibold text-[#9BBF5F]">
                        {contactoData.nombre_producto || 'No especificado'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fecha de contacto:</span>
                      <span>{new Date(contactoData.fecha_contacto).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-3">
                      <span className="font-semibold block mb-2">Mensaje:</span>
                      <p className="bg-[#1e1e1e] p-3 rounded-lg border border-[#2a2a2a]">
                        {contactoData.mensaje}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Información de seguimiento */}
            <div className="mt-8 bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ¿Qué sigue?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div className="text-center p-4 bg-[#1e1e1e] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 mx-auto bg-[#326a10] rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Revisión de tu solicitud</h3>
                  <p className="text-sm">Hemos recibido tu información y nos pondremos en contacto contigo a la brevedad.</p>
                </div>
                
                <div className="text-center p-4 bg-[#1e1e1e] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 mx-auto bg-[#326a10] rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Contacto</h3>
                  <p className="text-sm">Nuestro equipo revisará tu mensaje lo antes posible.</p>
                </div>
              </div>
            </div>
            
            {/* Acciones */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/" 
                className="bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all"
              >
                Ir al inicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmacionContacto;