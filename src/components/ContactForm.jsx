import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    pais: '', 
    producto: '',
    empresa: '',
    mensaje: ''
  });

  const [mensajeLength, setMensajeLength] = useState(0);
  const navigate = useNavigate(); // Hook para navegación

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'mensaje') {
      setMensajeLength(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const requiredFields = ['nombre', 'telefono', 'correo', 'mensaje', 'producto'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setSubmitError(`Por favor completa los campos requeridos: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Guardar en la base de datos
      const dbResponse = await fetch(`${import.meta.env.VITE_API_URL}/clientes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_producto: parseInt(formData.producto),
          id_pais: parseInt(formData.pais),
          nombre: formData.nombre,
          telefono: formData.telefono,
          correo: formData.correo,
          empresa: formData.empresa,
          mensaje: formData.mensaje,
          fecha_contacto: new Date().toISOString().slice(0, 19).replace('T', ' ')
        })
      });

      if (!dbResponse.ok) {
        const errorData = await dbResponse.json();
        throw new Error(errorData.message || 'Error al guardar en la base de datos');
      }

      // Obtener el ID del cliente recién creado para la redirección
      const responseData = await dbResponse.json();
      const uuid = responseData.uuid; // Obtener el UUID de la respuesta

      // 2. Enviar correos en paralelo
      const [emailResponse, adminEmailResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/contacto/enviar-confirmacion`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            correo: formData.correo,
            producto: formData.producto,
            mensaje: formData.mensaje
          })
        }),
        fetch(`${import.meta.env.VITE_API_URL}/contacto/enviar-notificacion-admin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            correo: formData.correo,
            telefono: formData.telefono,
            empresa: formData.empresa,
            producto: formData.producto,
            pais: formData.pais,
            mensaje: formData.mensaje
          })
        })
      ]);

      if (!emailResponse.ok || !adminEmailResponse.ok) {
        throw new Error('Error al enviar los correos de confirmación');
      }

      // Redirigir a la página de confirmación con el ID del cliente
      navigate(`/gracias/${uuid}`);

    } catch (error) {
      console.error('Error:', error);
      setSubmitError(error.message || 'Hubo un problema al enviar el formulario. Por favor intenta nuevamente.');
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
              <p className="font-bold">¡Mensaje enviado con éxito!</p>
              <p className="text-sm">Hemos recibido tu mensaje y te hemos enviado un correo de confirmación.</p>
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

      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#326a10] to-[#8bda5a] rounded-2xl opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]">
                ¡Contáctanos!
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 text-center">
              Déjanos tu correo y te haremos llegar más información
            </p>
            
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
              {/* Resto del formulario (igual que antes) */}
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
                  Correo <span className="text-[#9BBF5F]">*</span>
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo"
                  required
                  className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* País */}
                <div>
                  <label htmlFor="pais" className="block text-gray-300 mb-2">
                    País
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                    value={formData.pais}
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
                    placeholder="Empresa"
                    className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                  <label htmlFor="producto" className="block text-gray-300 mb-2">
                    Producto
                  </label>
                  <select
                    id="producto"
                    name="producto"
                    className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                    value={formData.producto}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un producto</option>
                    <option value="1">Ananta</option>
                    <option value="2">Dashcam IA</option>
                    <option value="3">GPS</option>
                  </select>
                </div>
              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-gray-300 mb-2">
                  Mensaje <span className="text-[#9BBF5F]">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Mensaje"
                  required
                  rows="4"
                  maxLength="100"
                  className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73963C] focus:border-transparent"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {mensajeLength} de 100 caracteres máximos.
                </div>
              </div>
              
              {/* Botón de enviar */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#9BBF5F]/40 transition-all duration-300 transform hover:scale-[1.02] w-full md:w-auto group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      Enviando...
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      Enviar
                      <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Efectos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9BBF5F] rounded-full filter blur-[80px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#73963C] rounded-full filter blur-[80px] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;