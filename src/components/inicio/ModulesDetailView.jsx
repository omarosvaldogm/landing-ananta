import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModulesDetailView = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (index) => {
    setExpandedModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const modules = [
    {
      name: "Requisiciones",
      description: "Digitaliza completamente el proceso de requisiciones eliminando el uso de papel en tu organización.",
      features: [
        "Flujo de aprobación configurable",
        "Histórico completo de movimientos",
        "Integración con órdenes de compra",
        "Notificaciones en tiempo real"
      ],
      screenshots: [
        "/img/modulos/REQUISICIÓN.png",
      ]
    },
    {
      name: "Órdenes de Compra",
      description: "Gestiona y automatiza todo el proceso de compras en tu empresa con nuestro módulo especializado.",
      features: [
        "Generación automática desde requisiciones",
        "Control de proveedores y contratos",
        "Seguimiento de estado en tiempo real",
        "Integración con facturación"
      ],
      screenshots: [
        "/img/modulos/ORDEN DE COMPRA.png",
      ]
    },
    {
      name: "Cotizaciones",
      description: "Crea y gestiona cotizaciones profesionales que pueden convertirse fácilmente en órdenes de venta.",
      features: [
        "Plantillas personalizables",
        "Conversión a orden de venta con un clic",
        "Seguimiento de clientes potenciales",
        "Histórico de versiones"
      ],
      screenshots: [

      ]
    },
    {
      name: "Notas de venta",
      description: "Registra todas tus ventas al contado y a crédito con este módulo completo de notas de venta.",
      features: [
        "Múltiples formas de pago",
        "Impuestos automáticos",
        "Integración con inventario",
        "Ticket electrónico"
      ],
      screenshots: [
      ]
    },
    {
      name: "Facturación",
      description: "Emite facturas electrónicas con todos los requisitos fiscales y convierte cotizaciones en facturas con un clic.",
      features: [
        "Facturación electrónica CFDI 4.0",
        "Conversión directa desde cotizaciones",
        "Complementos especializados para transporte",
        "Envío automático a clientes"
      ],
      screenshots: [
        "/img/modulos/facturacion2.png",
      ]
    },
    {
      name: "Notas de crédito",
      description: "Gestiona devoluciones y cancelaciones con notas de crédito que se integran automáticamente con facturación.",
      features: [
        "Generación desde facturas originales",
        "Aplicación automática a saldos",
        "Validación fiscal completa",
        "Motivos preconfigurados"
      ],
      screenshots: [
      ]
    },
    {
      name: "Bancos",
      description: "Conciliación bancaria automatizada y gestión de múltiples cuentas corporativas.",
      features: [
        "Conciliación automática",
        "Seguimiento de cheques",
        "Reportes de flujo de efectivo",
        "Integración con contabilidad"
      ],
      screenshots: [
      ]
    },
    {
      name: "Carta porte",
      description: "Generación automática de cartas porte con todos los complementos fiscales requeridos para transporte.",
      features: [
        "CFDI complemento carta porte 3.0",
        "Vinculación con unidades y operadores",
        "Geolocalización integrada",
        "Validación de rutas"
      ],
      screenshots: [
      ]
    },
    {
      name: "Inventario",
      description: "Control de inventario en tiempo real con múltiples bodegas y sistema de kardex completo.",
      features: [
        "Movimientos entre bodegas",
        "Valuación por métodos FIFO/PMP",
        "Conteos cíclicos",
        "Niveles de stock mínimo/máximo"
      ],
      screenshots: [
        "/img/modulos/inventario2.png",
        "/img/modulos/INVENTARIO.png",
      ]
    },
    {
      name: "Activos con QR",
      description: "Gestión de activos fijos con identificación por QR para mantenimientos y depreciaciones.",
      features: [
        "Registro fotográfico de activos",
        "Escaneo QR para consultas",
        "Depreciación automática",
        "Historial de mantenimientos"
      ],
      screenshots: [
      ]
    },
    {
      name: "Tickets internos",
      description: "Sistema de tickets para soporte interno y gestión de requerimientos entre áreas.",
      features: [
        "Asignación automática por área",
        "SLA configurable",
        "Notificaciones por correo",
        "Seguimiento de tiempo"
      ],
      screenshots: [
        "/img/modulos/tickets2.png",
      ]
    },
    {
      name: "Mantenimientos",
      description: "Programación y seguimiento de mantenimientos preventivos y correctivos para equipos y vehículos.",
      features: [
        "Calendario interactivo",
        "Checklists predefinidos",
        "Registro de repuestos utilizados",
        "Historial por equipo"
      ],
      screenshots: [
        "/img/modulos/mantenimiento2.png",
      ]
    },
    {
      name: "Checklists",
      description: "Sistema digital de checklists para operaciones recurrentes con validación en tiempo real.",
      features: [
        "Editor visual de formatos",
        "Firmas electrónicas",
        "Fotos como evidencia",
        "Reportes de cumplimiento"
      ],
      screenshots: [
        "/img/modulos/checklist.png",
      ]
    },
    {
      name: "Arrendamiento",
      description: "Gestión completa de contratos de arrendamiento de equipos y propiedades.",
      features: [
        "Recordatorios de pagos",
        "Generación de recibos",
        "Control de inventario arrendado",
        "Renovaciones automáticas"
      ],
      screenshots: [
        "/img/modulos/arrendamiento2.png",
      ]
    },
    {
      name: "Neumáticos y baterías",
      description: "Sistema especializado para el control de vida útil de neumáticos y baterías en flotillas.",
      features: [
        "Registro por posición en vehículo",
        "Control de rotaciones",
        "Alertas de vida útil",
        "Proveedores especializados"
      ],
      screenshots: [
        "/img/modulos/NEUMATICOS.png",
      ]
    },
    {
      name: "Control de combustible",
      description: "Monitoreo y control de consumo de combustible con integración a dispensadores y GPS.",
      features: [
        "Comparativo km/litro",
        "Detección de anomalías",
        "Integración con tarjetas de combustible",
        "Reportes por operador"
      ],
      screenshots: [
        "/img/modulos/combustible2.png",
        "/img/modulos/COMBUSTIBLE.png",
      ]
    },
    {
      name: "Bodegas",
      description: "Administración de múltiples bodegas con control de entradas, salidas y traslados.",
      features: [
        "Ubicaciones específicas (bin location)",
        "Etiquetado por lote/serie",
        "Reportes de valuación",
        "Integración con compras/ventas"
      ],
      screenshots: [
        "/img/modulos/BODEGAS2.png",
      ]
    },
    {
      name: "EIR",
      description: "Electronic Interchange Receipt para el control de embarques y recepciones en transporte.",
      features: [
        "Registro fotográfico de daños",
        "Firma electrónica del receptor",
        "Vinculación con carta porte",
        "Reportes de incidencias"
      ],
      screenshots: [
        "/img/modulos/EIR2.png",
      ]
    },
    {
      name: "Dashcam IA",
      description: "Análisis de video inteligente para detección de riesgos en operación de flotillas.",
      features: [
        "Detección de distracción al volante",
        "Reconocimiento de señales de tránsito",
        "Alertas en tiempo real",
        "Reportes de eventos"
      ],
      screenshots: [
        "/img/modulos/camara2.png",
      ]
    },
    {
      name: "CRM",
      description: "Sistema de gestión de relaciones con clientes para seguimiento de oportunidades y servicio.",
      features: [
        "Pipeline de ventas visual",
        "Recordatorios de seguimiento",
        "Historial de interacciones",
        "Integración con correo electrónico"
      ],
      screenshots: [
        "/img/modulos/CRM2.png",
        "/img/modulos/CRM.png"
      ]
    },
    {
      name: "Monitoreo activo",
      description: "Centraliza y simplifica la supervisión de tu flotilla con herramientas avanzadas de monitoreo en tiempo real.",
      features: [
        "Comparte datos entre monitoristas",
        "Almacenamiento de rutas históricas",
        "Detección de abandonos de ruta",
        "Identificación de pérdidas de señal",
        "Generación de tareas automáticas"
      ],
      screenshots: [
        "/img/modulos/MONITOREO ACTIVO.png",
      ]
    },
    {
      name: "Punto de venta",
      description: "Sistema completo de punto de venta para gestionar todas tus transacciones comerciales desde un solo lugar.",
      features: [
        "Cobro en múltiples sucursales",
        "Gestión integrada de proveedores",
        "Control de inventarios en tiempo real",
        "Cálculo automático de ganancias",
        "Facturación instantánea"
      ],
      screenshots: [
        "/img/modulos/PUNTO DE VENTA.png",
        "/img/modulos/PUNTO DE VENTA_2.png"
      ]
    },
    {
      name: "Viajes",
      description: "Gestión completa de servicios logísticos y traslados con documentación automática de cada operación.",
      features: [
        "Registro detallado de cada traslado",
        "Documentación automática de servicios",
        "Informes completos por viaje",
        "Integración con cartas porte",
        "Seguimiento en tiempo real"
      ],
      screenshots: [
        "/img/modulos/viajes2.png",
        "/img/modulos/VIAJES.png",
      ]
    },
    {
      name: "Control de personal y asistencia",
      description: "Gestión completa de servicios logísticos y traslados con documentación automática de cada operación.",
      features: [
        "Registro y gestión de información de empleados",
        "Control de asistencia: entradas, salidas y horarios de comida",
        "Asignación y control de horarios laborales",
        "Gestión de vacaciones y días disponibles",
        "Acceso y registro desde la web o la app móvil"
      ],
      screenshots: [
        "/img/modulos/asistencia.png",
        "/img/modulos/asistencia2.png",
      ]
    }
  ];

  // Animaciones
  const sidebarItemVariants = {
    hover: { 
      backgroundColor: "rgba(155, 191, 95, 0.1)",
      borderLeftColor: "#9BBF5F",
      transition: { duration: 0.2 }
    },
    selected: { 
      backgroundColor: "rgba(155, 191, 95, 0.2)",
      borderLeftColor: "#9BBF5F",
      borderLeftWidth: "4px"
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { opacity: 0, x: -50 }
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Efectos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#326a10] rounded-full filter blur-[90px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#326a10] rounded-full filter blur-[100px] opacity-15"></div>
      </div>

      {/* Versión móvil (accordion) */}
      <div className="md:hidden pt-24 pb-8 px-4 mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 px-2">Módulos del Sistema</h2>
        
        <div className="space-y-2">
          {modules.map((module, index) => (
            <div key={index} className="bg-[#121212] rounded-lg border border-[#1e1e1e] overflow-hidden">
              <motion.div
                className={`p-4 cursor-pointer flex justify-between items-center ${expandedModules[index] ? 'bg-[rgba(155,191,95,0.1)]' : ''}`}
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center">
                  <div className="text-xl mr-3">{getModuleIcon(module.name)}</div>
                  <h3 className="font-medium text-gray-300">
                    {module.name}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedModules[index] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.div>
              
              <AnimatePresence>
                {expandedModules[index] && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-4 pb-4"
                  >
                    <div className="pt-2 border-t border-[#1e1e1e]">
                      <p className="text-gray-300 mb-4">{module.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#9BBF5F] mb-2">Características:</h4>
                        <ul className="space-y-2 pl-4">
                          {module.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <span className="text-[#9BBF5F] mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>1
                        <div>
                          <h4 className="text-lg font-semibold text-[#9BBF5F] mb-3">Capturas:</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {module.screenshots.map((screenshot, idx) => (
                              <div key={idx} className="rounded-lg overflow-hidden border border-[#1e1e1e]">
                                <img 
                                  src={screenshot} 
                                  alt={`Captura ${module.name} ${idx + 1}`} 
                                  className="w-full h-auto"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Versión desktop (original) */}
      <div className="hidden md:flex">
        {/* Barra lateral de módulos */}
        <div 
          className="w-80 lg:w-96 bg-[#121212] border-r border-[#1e1e1e] p-6 overflow-y-auto mt-[160px]"
          style={{ height: 'calc(100vh - 170px)' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <h2 className="text-2xl font-bold text-white mb-8">Módulos del Sistema</h2>
          
          <div className="space-y-2">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg cursor-pointer border-l-2 ${selectedModule === index ? 'border-[#9BBF5F]' : 'border-transparent'}`}
                variants={sidebarItemVariants}
                initial={false}
                animate={selectedModule === index ? "selected" : {}}
                whileHover="hover"
                onClick={() => setSelectedModule(index)}
              >
                <div className="flex items-center">
                  <div className="text-xl mr-3">{getModuleIcon(module.name)}</div>
                  <h3 className={`font-medium ${selectedModule === index ? 'text-[#9BBF5F]' : 'text-gray-300'}`}>
                    {module.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contenido principal */}
        <div 
          className="flex-1 p-8 overflow-y-auto mt-[160px]"
          style={{ height: 'calc(100vh - 170px)' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModule}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl mx-auto"
            >
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h1 className="text-4xl font-bold text-white flex items-center">
                    <span className="mr-3">{getModuleIcon(modules[selectedModule].name)}</span>
                    {modules[selectedModule].name}
                  </h1>
                </div>
                <p className="text-xl text-gray-300 mb-8">{modules[selectedModule].description}</p>
                
                <div className="bg-[#121212] rounded-xl p-6 mb-10 border border-[#1e1e1e]">
                  <h3 className="text-2xl font-semibold text-[#9BBF5F] mb-4">Características Principales</h3>
                  <ul className="space-y-3">
                    {modules[selectedModule].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#9BBF5F] mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {modules[selectedModule].screenshots.length > 0 && (
                    <>
                      <h3 className="text-2xl font-semibold text-[#9BBF5F] mb-6">Capturas del Módulo</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {modules[selectedModule].screenshots.map((screenshot, idx) => (
                          <div key={idx} className="bg-[#121212] rounded-xl overflow-hidden border border-[#1e1e1e]">
                            <img 
                              src={screenshot} 
                              alt={`Captura ${modules[selectedModule].name} ${idx + 1}`} 
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Función auxiliar para obtener íconos según el módulo
function getModuleIcon(moduleName) {
  const icons = {
    "Requisiciones": "📝",
    "Órdenes de Compra": "🛒",
    "Cotizaciones": "💰",
    "Notas de venta": "🧾",
    "Facturación": "📑",
    "Notas de crédito": "💳",
    "Bancos": "🏦",
    "Carta porte": "🚛",
    "Inventario": "📦",
    "Activos con QR": "📱",
    "Tickets internos": "🎫",
    "Mantenimientos": "🔧",
    "Checklists": "✅",
    "Arrendamiento": "🏢",
    "Neumáticos y baterías": "🔋",
    "Control de combustible": "⛽",
    "Bodegas": "🏭",
    "EIR": "📊",
    "Dashcam IA": "📹",
    "CRM": "👥",
    "Monitoreo activo": "👁️",
    "Punto de venta": "💲",
    "Viajes": "✈️",
    "Control de personal y asistencia": "⏱️"
  };
  
  return icons[moduleName] || "✨";
}

export default ModulesDetailView;