import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Compra = () => {
  const { id } = useParams();
  const [compraData, setCompraData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompraData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/clientes/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de la compra');
        }
        const data = await response.json();
        setCompraData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompraData();
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
            <h2 className="text-2xl font-bold text-white mt-4">Error al cargar la compra</h2>
            <p className="text-gray-400 mt-2">{error}</p>
            <p className="text-gray-500 mt-4">ID de compra: {id}</p>
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
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-[#326a10] to-[#8bda5a] p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Detalles de tu compra
            </h1>
            <p className="text-white/90 mt-2">ID de transacción: {compraData.paypal_id}</p>
          </div>
          
          {/* Contenido */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Información del usuario */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Información del cliente
                </h2>
                
                <div className="space-y-3 text-gray-300">
                  <p><span className="font-semibold">Nombre:</span> {compraData.nombre}</p>
                  <p><span className="font-semibold">Correo:</span> {compraData.correo}</p>
                  <p><span className="font-semibold">Teléfono:</span> {compraData.telefono}</p>
                  <p><span className="font-semibold">Empresa:</span> {compraData.empresa || 'No especificada'}</p>
                  <p><span className="font-semibold">País:</span> {compraData.nombre_pais || 'No especificado'}</p>
                </div>
              </div>
              
              {/* Detalles de pago */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Detalles de pago
                </h2>
                
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Estado:</span>
                      <span className={`font-semibold ${
                        compraData.paypal_status === 'COMPLETED' ? 'text-[#9BBF5F]' : 'text-yellow-500'
                      }`}>
                        {compraData.paypal_status === 'COMPLETED' ? 'Completado' : compraData.paypal_status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fecha:</span>
                      <span>{new Date(compraData.fecha_contacto).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Método:</span>
                      <span>PayPal</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-[#2a2a2a]">
                      <span>Total:</span>
                      <span className="text-[#9BBF5F]">${compraData.monto_pagado} MXN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Módulos comprados */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#9BBF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Módulos adquiridos
              </h2>
              
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                {compraData.modulos && compraData.modulos.length > 0 ? (
                  <ul className="space-y-3">
                    {compraData.modulos.map((modulo, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-[#9BBF5F] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{modulo}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No se encontraron módulos</p>
                )}
              </div>
            </div>
            
            {/* Acciones */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/" 
                className="bg-[#1e1e1e] border border-[#2a2a2a] text-white font-bold py-3 px-6 rounded-full hover:bg-[#2a2a2a] transition-all text-center"
              >
                Volver al inicio
              </a>
              <button 
                onClick={() => window.print()}
                className="bg-gradient-to-r from-[#9BBF5F] to-[#73963C] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all"
              >
                Imprimir comprobante
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Compra;