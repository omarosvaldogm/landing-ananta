import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import InicioPage from "./pages/InicioPage";
import FuncionalidadesPage from "./pages/FuncionalidadesPage";
import AnantaPage from "./pages/AnantaPage";
import NosotrosPage from "./pages/NosotrosPage";
import DashCamPage from "./pages/DashCamPage";
import GPSPage from "./pages/GPSPage";
import ContactoPage from "./pages/ContactoPage";
import PymesPage from "./pages/PymesPage";
import CompraPage from "./pages/CompraPage";
import LandingPymes from "./pages/LandingPymes";
import PoliticasPage from "./pages/PoliticasPage";
import TerminosPage from "./pages/TerminosPage";

function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        pagePath: location.pathname,
      },
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <TrackPageViews />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/funcionalidades" element={<FuncionalidadesPage />} />
        <Route path="/plataforma-ananta" element={<AnantaPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/dashcam" element={<DashCamPage />} />
        <Route path="/gps" element={<GPSPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/erp-empresarial" element={<PymesPage />} />
        <Route path="/soluciones-pymes" element={<LandingPymes />} />
        <Route path="/politicas" element={<PoliticasPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/compra/:id" element={<CompraPage />} />
      </Routes>
    </Router>
  );
}

export default App;