import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Institucionales = () => {
  // Función para extraer el ID de un URL de YouTube
  const extractYoutubeId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[8].length === 11) ? match[8] : null;
  };

  // Función para convertir URL de visualización a URL de incrustación
  const convertToEmbedUrl = (url) => {
    const videoId = extractYoutubeId(url);
    if (videoId) {
      // Si es un short, convertimos a URL de embed estándar
      if (url.includes('youtube.com/shorts/')) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Si no es un URL de YouTube, devolver el original
  };

  // Función para generar la URL de la miniatura
  const getThumbnailUrl = (url) => {
    const videoId = extractYoutubeId(url);
    if (videoId) {
      // Para shorts de YouTube, usamos una miniatura diferente
      if (url.includes('youtube.com/shorts/') || url.includes('youtu.be/')) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return ''; // En caso de que no sea un URL válido de YouTube
  };

  // Resto del código permanece igual...
  // Estado para almacenar los videos desde la API
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar los videos desde la API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/categoria/2`);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
          // Mapeamos solo los campos que necesitamos: titulo y url
          const formattedVideos = data.data.map(video => ({
            id: video.id_video,
            title: video.titulo,
            url: video.url,
            embedUrl: convertToEmbedUrl(video.url) // Convertimos a URL de embed
          }));
          setVideos(formattedVideos);
        } else {
          throw new Error('Formato de respuesta inesperado');
        }
      } catch (err) {
        console.error('Error al cargar videos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Cargando videos...</div>
      </div>
    );
  }

  // Mostrar error si ocurre
  if (error) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-between overflow-hidden relative">

      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-16 md:py-24 w-full mt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Texto centrado */}
        <motion.div 
          className="w-full text-center mb-16"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9BBF5F] via-[#73963C] to-[#4A6D1A]"
            variants={itemVariants}
          >
            <span className='text-white'>Videos</span> Institucionales
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto text-gray-300"
            variants={itemVariants}
          >
            Descubre nuestros videos institucionales para conocer más sobre Ananta ERP y cómo puede transformar la gestión de tu empresa.
          </motion.p>
        </motion.div>

        {/* Grid de videos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
          variants={containerVariants}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => openVideo(video)}
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <img 
                  src={getThumbnailUrl(video.url)} 
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Si la miniatura no está disponible, intentamos con la calidad estándar
                    const videoId = extractYoutubeId(video.url);
                    if (videoId) {
                      e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#9BBF5F] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                <button className="mt-4 px-4 py-2 bg-[#9BBF5F] hover:bg-[#73963C] text-white rounded-lg transition-colors flex items-center">
                  Ver video
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal para reproducir video */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div 
              className="relative bg-[#1a1a1a] rounded-xl w-full max-w-4xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#9BBF5F] rounded-full flex items-center justify-center hover:bg-[#73963C] transition-colors"
                onClick={closeVideo}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  src={convertToEmbedUrl(selectedVideo.url)}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Institucionales;