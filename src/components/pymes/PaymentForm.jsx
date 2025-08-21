import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
const PaymentForm = ({ selectedModules = [] }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    id_pais: '',
    empresa: '',
    terminos: false
  });
  const [paypalReady, setPaypalReady] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const paypalButtonsRef = useRef(null);

  // Cargar el script de PayPal
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=MXN`;
    script.addEventListener('load', () => setPaypalReady(true));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Limpiar los botones de PayPal al desmontar
      if (paypalButtonsRef.current) {
        paypalButtonsRef.current.close();
      }
    };
  }, []);

  // Validar formulario antes de permitir el pago
  const validateForm = useCallback(() => {
    const requiredFields = ['nombre', 'telefono', 'correo', 'terminos'];
    const missingFields = requiredFields.filter(field => {
      if (field === 'terminos') return !formData[field];
      return !formData[field];
    });

    if (missingFields.length > 0) {
      setSubmitError(`Por favor completa los campos requeridos: ${missingFields.join(', ').replace('terminos', 'acepta los términos y condiciones')}`);
      return false;
    }
    
    setSubmitError(null);
    return true;
  }, [formData]);

  // Inicializar los botones de PayPal una sola vez
  useEffect(() => {
    if (paypalReady && window.paypal && !paypalButtonsRef.current) {
      paypalButtonsRef.current = window.paypal.Buttons({
        createOrder: function(data, actions) {
          // Validar el formulario antes de crear la orden
          if (!validateForm()) {
            return Promise.reject(new Error('Formulario no válido'));
          }
          
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '9250.00',
                currency_code: 'MXN',
                breakdown: {
                  item_total: {
                    value: '9250.00',
                    currency_code: 'MXN'
                  }
                }
              },
              items: selectedModules.map(module => ({
                name: module.title,
                unit_amount: {
                  value: (9250 / selectedModules.length).toFixed(2),
                  currency_code: 'MXN'
                },
                quantity: '1'
              }))
            }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            // Cuando el pago se completa
            setPaymentCompleted(true);
            handlePayPalSuccess(details);
          });
        },
        onError: function(err) {
          setSubmitError('Error al procesar el pago con PayPal. Por favor intenta nuevamente.');
          console.error('PayPal error:', err);
        },
        onClick: function() {
          // Validar el formulario cuando se hace clic en el botón de PayPal
          validateForm();
        }
      });
      
      paypalButtonsRef.current.render('#paypal-button-container');
    }

    // Limpieza al desmontar o cuando cambian las dependencias
    return () => {
      if (paypalButtonsRef.current) {
        paypalButtonsRef.current.close();
        paypalButtonsRef.current = null;
      }
    };
  }, [paypalReady, selectedModules, validateForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
const handlePayPalSuccess = async (details) => {
  setIsSubmitting(true);
  setSubmitError(null);
  
  try {
    // Preparar los datos para enviar a la API de clientes
    const payload = {
      ...formData,
      modulos: selectedModules.map(m => m.id),
      fecha_contacto: new Date().toISOString(),
      id_producto: 4,
      estado_contacto: 2,
      paypal_id: details.id,
      paypal_status: details.status,
      monto_pagado: 8400
    };

    delete payload.terminos;

    // 1. Enviar datos a la API de clientes
    const clienteResponse = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!clienteResponse.ok) {
      throw new Error(`Error al enviar datos: ${clienteResponse.statusText}`);
    }

    const clienteData = await clienteResponse.json();

    // 2. Registrar la transacción en la base de datos
    const transaccionData = {
      paypal_id: details.id,
      id_cliente: clienteData.id_cliente, // Asume que la respuesta incluye el ID del cliente
      estado: details.status,
      monto: 8400,
      moneda: 'MXN',
      correo_pagador: details.payer.email_address,
      nombre_pagador: details.payer.name.given_name + ' ' + details.payer.name.surname,
      detalles_transaccion: details
    };

    const transaccionResponse = await fetch(`${import.meta.env.VITE_API_URL}/transacciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaccionData),
    });

    if (!transaccionResponse.ok) {
      console.error('Error al registrar transacción:', await transaccionResponse.text());
      // No lanzamos error aquí porque el pago ya se completó
    }

    // 3. Enviar correo de confirmación
    const emailPayload = {
  nombre: formData.nombre,
  correo: formData.correo,
  modulos: selectedModules,
  monto_pagado: 8400,
  paypal_id: details.id,
  id_cliente: clienteData.id_cliente // Añadir esta línea
};

    const emailResponse = await fetch(`${import.meta.env.VITE_API_URL}/contacto/enviar-confirmacion-compra`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      console.error('Error al enviar correo de confirmación:', await emailResponse.text());
    }
    const emailAdminResponse = await fetch(`${import.meta.env.VITE_API_URL}/contacto/enviar-notificacion-compra-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailAdminResponse.ok) {
      console.error('Error al enviar correo de confirmación:', await emailAdminResponse.text());
    }

    // Resetear el formulario
    setFormData({
      nombre: '',
      telefono: '',
      correo: '',
      id_pais: '',
      empresa: '',
      terminos: false
    });

    // Mostrar mensaje de éxito
    setSubmitError(null);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    setSubmitError(error.message || 'Hubo un problema al guardar tu información. El pago fue exitoso pero por favor contáctanos.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Preparar los datos para enviar a la API
      const payload = {
        ...formData,
        modulos: selectedModules.map(m => m.id),
        fecha_contacto: new Date().toISOString(),
        id_producto: 4,
        estado_contacto: 2,
        monto_pagado: 0 // Indica que no se ha pagado aún
      };

      delete payload.terminos;

      // Enviar datos a la API
      const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error al enviar datos: ${response.statusText}`);
      }

      const data = await response.json();

      // Resetear el formulario
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        id_pais: '',
        empresa: '',
        terminos: false
      });

      // Mostrar mensaje de éxito
      setSubmitError(null);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitError(error.message || 'Hubo un problema al procesar tu información. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Notificación de éxito */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-[#326a10] to-[#8bda5a] text-white px-6 py-4 rounded-lg shadow-lg flex items-start space-x-3 max-w-sm">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <p className="font-bold">¡Información enviada con éxito!</p>
              <p className="text-sm">
                {paymentCompleted 
                  ? 'Hemos recibido tu pago de $8,400 MXN y nos pondremos en contacto contigo pronto.' 
                  : 'Hemos recibido tu información y nos pondremos en contacto contigo pronto.'}
              </p>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Resumen de compra */}
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                  Resumen de tu compra
                </span>
              </h2>
              
              {/* Módulos seleccionados */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Módulos seleccionados:</h3>
                {selectedModules.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedModules.map((module, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-[#9BBF5F] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{module.title}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No hay módulos seleccionados</p>
                )}
              </div>
              
              {/* Detalles de pago */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Detalles de pago:</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Implementación:</span>
                    <div className="flex items-center">
                      <span className="text-gray-400 line-through mr-2">$18,500</span>
                      <span className="font-bold text-[#9BBF5F]">$9,250</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mensualidad:</span>
                    <span className="font-bold text-white">$3,800</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-[#9BBF5F]">
                    <span>Descuento (50%):</span>
                    <span>$9,250</span>
                  </div>
                  
                  <div className="border-t border-[#2a2a2a] pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-300">Total inicial:</span>
                      <span className="text-[#9BBF5F]">$9,250 MXN</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                * La mensualidad de $3,800 comenzará a aplicarse después del primer mes.
              </div>
            </div>
            
            {/* Formulario de pago */}
            <div className="p-8 md:p-10 relative">
              {/* Efecto de brillo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[80px] opacity-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Completa tu información
                </h2>
                
                {/* Mensaje de error */}
                {submitError && (
                  <div className="mb-6 bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-gray-300 mb-2">
                        Nombre <span className="text-[#9BBF5F]">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre completo"
                        required
                        className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-gray-300 mb-2">
                        Teléfono <span className="text-[#9BBF5F]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="Teléfono"
                        required
                        className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Correo */}
                  <div>
                    <label htmlFor="correo" className="block text-gray-300 mb-2">
                      Correo electrónico <span className="text-[#9BBF5F]">*</span>
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="Correo electrónico"
                      required
                      className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                      value={formData.correo}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* País */}
                    <div>
                      <label htmlFor="id_pais" className="block text-gray-300 mb-2">
                        País
                      </label>
                      <select
                        id="id_pais"
                        name="id_pais"
                        className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                        value={formData.id_pais}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un país</option>
                        <option value="1">México</option>
                        <option value="2">Colombia</option>
                        <option value="3">Estados Unidos</option>
                      </select>
                    </div>
                    
                    {/* Empresa */}
                    <div>
                      <label htmlFor="empresa" className="block text-gray-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                        value={formData.empresa}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Términos y condiciones */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terminos"
                        name="terminos"
                        type="checkbox"
                        required
                        className="w-4 h-4 bg-[#1e1e1e] border-[#2a2a2a] rounded focus:ring-[#73963C] focus:ring-2"
                        checked={formData.terminos}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terminos" className="text-gray-400">
                        Acepto los <a href="#" className="text-[#9BBF5F] hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-[#9BBF5F] hover:underline">Política de Privacidad</a> <span className="text-[#9BBF5F]">*</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Integración de PayPal */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Método de pago:</h3>
                    
                    <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a] mb-6">
                      <div id="paypal-button-container" className="min-h-[50px]">
                        {!paypalReady && (
                          <div className="text-center py-4 text-gray-500">
                            Cargando PayPal...
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 text-center text-sm text-gray-500">
                        Serás redirigido a PayPal para completar tu pago seguro de $9,250 MXN
                      </div>
                    </div>
                    
                    <div className="text-center text-gray-500 text-sm">
                      O completa el formulario y te contactaremos para finalizar el proceso
                    </div>
                  </div>
                  
                  {/* Botón de enviar */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || paymentCompleted}
                      className={`bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.02] w-full ${
                        isSubmitting || paymentCompleted ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          Procesando...
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      ) : paymentCompleted ? (
                        'Pago Completado ✓'
                      ) : (
                        'Finalizar Compra'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentForm;