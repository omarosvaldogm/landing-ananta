import React from 'react'
import HeroSection from '../components/inicio/HeroSection'
import Header from '../components/Header'
import ToolsSection from '../components/inicio/ToolsSection'
import StatsCounter from '../components/inicio/StatsCounter'
import SolucionesSection from '../components/inicio/SolucionesSection'
import ClientesSection from '../components/inicio/ClientesSection'
import AliadosSection from '../components/inicio/AliadosSection'
import AliadosTicker from '../components/inicio/AliadosTicker'
import CtaSection from '../components/inicio/CtaSection'
import Footer from '../components/Footer'
import FeaturesSection from '../components/inicio/FeaturesSection'
import FuncionalidadesSection from '../components/inicio/FuncionalidadesSection'
import ModulesDetailView from '../components/inicio/ModulesDetailView'

function InicioPage() {
  return (
    <div className='bg-[#0a0a0a]'>
        <Header />
        <HeroSection />
        <ToolsSection />
        <FeaturesSection />
        <FuncionalidadesSection />
        <SolucionesSection />
        <ClientesSection />
        <AliadosSection />
        <CtaSection />
        <Footer />
    </div>
  )
}

export default InicioPage