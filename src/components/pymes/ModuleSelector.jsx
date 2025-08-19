import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModuleSelector = ({ onModulesSelected }) => {
  const [selectedModules, setSelectedModules] = useState([]);

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
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
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
          initial="hidden"
          animate="visible"
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
      </div>
    </div>
  );
};

export default ModuleSelector;