import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ModuleSelectorWithContact = ({ onModulesSelected }) => {
  const [selectedModules, setSelectedModules] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
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
  const navigate = useNavigate();

  const modules = [
    {
      id: 'requisiciones',
      title: 'REQUISICIONES',
      description: 'Digitaliza completamente el proceso de requisiciones eliminando el uso de papel en tu organización.'
    },
    {
      id: 'ordenes-compra',
      title: 'ÓRDENES DE COMPRA',
      description: 'Gestiona y automatiza todo el proceso de compras en tu empresa con nuestro módulo especializado.'
    },
    {
      id: 'cotizaciones',
      title: 'COTIZACIONES',
      description: 'Crea y gestiona cotizaciones profesionales que pueden convertirse fácilmente en órdenes de venta.'
    },
    {
      id: 'notas-venta',
      title: 'NOTAS DE VENTA',
      description: 'Registra todas tus ventas al contado y a crédito con este módulo completo de notas de venta.'
    },
    {
      id: 'facturacion',
      title: 'FACTURACIÓN',
      description: 'Emite facturas electrónicas con todos los requisitos fiscales y convierte cotizaciones en facturas con un clic.'
    },
    {
      id: 'notas-credito',
      title: 'NOTAS DE CRÉDITO',
      description: 'Gestiona devoluciones y cancelaciones con notas de crédito que se integran automáticamente con facturación.'
    },
    {
      id: 'bancos',
      title: 'BANCOS',
      description: 'Conciliación bancaria automatizada y gestión de múltiples cuentas corporativas.'
    },
    {
      id: 'carta-porte',
      title: 'CARTA PORTE',
      description: 'Generación automática de cartas porte con todos los complementos fiscales requeridos para transporte.'
    },
    {
      id: 'inventario',
      title: 'INVENTARIO',
      description: 'Control de inventario en tiempo real con múltiples bodegas y sistema de kardex completo.'
    },
    {
      id: 'activos-qr',
      title: 'ACTIVOS CON QR',
      description: 'Gestión de activos fijos con identificación por QR para mantenimientos y depreciaciones.'
    },
    {
      id: 'tickets',
      title: 'TICKETS INTERNOS',
      description: 'Sistema de tickets para soporte interno y gestión de requerimientos entre áreas.'
    },
    {
      id: 'mantenimientos',
      title: 'MANTENIMIENTOS',
      description: 'Programación y seguimiento de mantenimientos preventivos y correctivos para equipos y vehículos.'
    },
    {
      id: 'checklists',
      title: 'CHECKLISTS',
      description: 'Sistema digital de checklists para operaciones recurrentes con validación en tiempo real.'
    },
    {
      id: 'arrendamiento',
      title: 'ARRENDAMIENTO',
      description: 'Gestión completa de contratos de arrendamiento de equipos y propiedades.'
    },
    {
      id: 'neumaticos-baterias',
      title: 'NEUMÁTICOS Y BATERÍAS',
      description: 'Control de vida útil de neumáticos y baterías en flotillas con alertas de mantenimiento.'
    },
    {
      id: 'combustible',
      title: 'CONTROL DE COMBUSTIBLE',
      description: 'Monitoreo y control de consumo de combustible con integración a dispensadores y GPS.'
    },
    {
      id: 'bodegas',
      title: 'BODEGAS',
      description: 'Administración de múltiples bodegas con control de entradas, salidas y traslados.'
    },
    {
      id: 'eir',
      title: 'EIR',
      description: 'Electronic Interchange Receipt para el control de embarques y recepciones en transporte.'
    },
    {
      id: 'dashcam',
      title: 'DASHCAM IA',
      description: 'Análisis de video inteligente para detección de riesgos en operación de flotillas.'
    },
    {
      id: 'crm',
      title: 'CRM',
      description: 'Sistema de gestión de relaciones con clientes para seguimiento de oportunidades y servicio.'
    },
    {
      id: 'monitoreo',
      title: 'MONITOREO ACTIVO',
      description: 'Centraliza y simplifica la supervisión de tu flotilla con herramientas avanzadas de monitoreo.'
    },
    {
      id: 'punto-venta',
      title: 'PUNTO DE VENTA',
      description: 'Sistema completo de punto de venta para gestionar todas tus transacciones comerciales.'
    },
    {
      id: 'viajes',
      title: 'VIAJES',
      description: 'Gestión completa de servicios logísticos y traslados con documentación automática.'
    }
  ];

  const toggleModule = (moduleId) => {
    if (selectedModules.includes(moduleId)) {
      setSelectedModules(selectedModules.filter(id => id !== moduleId));
    } else if (selectedModules.length < 5) {
      const newSelected = [...selectedModules, moduleId];
      setSelectedModules(newSelected);
      
      // Cuando se seleccionan exactamente 5 módulos
      if (newSelected.length === 5 && onModulesSelected) {
        const selectedModulesData = modules.filter(module => 
          newSelected.includes(module.id)
        );
        onModulesSelected(selectedModulesData);
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'mensaje') {
      setMensajeLength(value.length);
    }
  };

  const handleFormSubmit = async (e) => {
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
      // Aquí iría la lógica de envío del formulario
      // Simulamos un retraso de red
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirigir a la página de confirmación
      navigate(`/gracias/12345`);
    } catch (error) {
      console.error('Error:', error);
      setSubmitError(error.message || 'Hubo un problema al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-[#0a0a0a] py-16 px-6 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8bda5a] rounded-full filter blur-[100px] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Botón de switch */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#121212] p-1 rounded-lg border border-[#2a2a2a] flex">
            <button
              onClick={() => setShowContactForm(false)}
              className={`px-6 py-2 rounded-md transition-colors ${
                !showContactForm 
                  ? 'bg-[#9BBF5F] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Seleccionar Módulos
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className={`px-6 py-2 rounded-md transition-colors ${
                showContactForm 
                  ? 'bg-[#9BBF5F] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contacto
            </button>
          </div>
        </div>

        {!showContactForm ? (
          // Selector de Módulos
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] to-[#73963C]"
                variants={itemVariants}
              >
                Elige Tus 5 Módulos Favoritos
              </motion.h2>
              <motion.p 
                className="text-gray-400"
                variants={itemVariants}
              >
                Selecciona los módulos que más se adapten a las necesidades de tu negocio
              </motion.p>
              
              <motion.div 
                className="mt-6 bg-[#121212] inline-block px-4 py-2 rounded-lg border border-[#2a2a2a]"
                variants={itemVariants}
              >
                <span className="text-gray-300 mr-2">Módulos seleccionados:</span>
                <span className={`font-bold ${selectedModules.length === 5 ? 'text-[#9BBF5F]' : 'text-gray-500'}`}>
                  {selectedModules.length}/5
                </span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  className={`relative rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer 
                    ${selectedModules.includes(module.id) 
                      ? 'border-[#9BBF5F] bg-[#9BBF5F]/10' 
                      : 'border-[#2a2a2a] hover:border-[#9BBF5F]/30'}
                    ${selectedModules.length >= 5 && !selectedModules.includes(module.id) ? 'opacity-60' : ''}
                  `}
                  onClick={() => toggleModule(module.id)}
                  variants={itemVariants}
                  whileHover={selectedModules.length < 5 || selectedModules.includes(module.id) ? "hover" : {}}
                >
                  {/* Checkbox visual */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors 
                    ${selectedModules.includes(module.id) ? 'border-[#9BBF5F] bg-[#9BBF5F]' : 'border-gray-600'}`}
                  >
                    {selectedModules.includes(module.id) && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${selectedModules.includes(module.id) ? 'text-[#9BBF5F]' : 'text-white'}`}>
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{module.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {selectedModules.length === 5 && (
              <motion.div 
                className="mt-8 text-center p-4 bg-[#9BBF5F]/10 border border-[#9BBF5F] rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#9BBF5F] font-medium">
                  ¡Perfecto! Has seleccionado tus 5 módulos. Continuaremos con el proceso de contratación.
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Formulario de Contacto
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
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
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                      onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                      onChange={handleFormChange}
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
                      onChange={handleFormChange}
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModuleSelectorWithContact;