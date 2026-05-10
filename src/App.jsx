import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Componentes
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Founders } from "./components/Founders";
import CookieBanner from "./components/CookieBanner";

// Páginas
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { PortfolioPage } from "./pages/PortfolioPage";
import { Precios } from "./pages/Precios";
import { Contacto } from "./pages/Contacto";

// 1. Configuración de Analytics
const GA_MEASUREMENT_ID = "G-VLSLL1YMM4"; // Reemplaza con tu ID real

// Función que activaremos desde el CookieBanner
export const activarAnalytics = () => {
  if (!ReactGA.isInitialized) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// 2. Componente para rastrear cambios de ruta (debe estar dentro de BrowserRouter)
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (ReactGA.isInitialized) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search 
      });
    }
  }, [location]);

  return null;
}

function App() {
  
  // 3. Efecto para activar Analytics si el usuario ya aceptó cookies antes
  useEffect(() => {
    const consent = localStorage.getItem("cookiesAceptadas");
    if (consent === "true") {
      activarAnalytics();
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Tracker de rutas */}
      <AnalyticsTracker />
      
      {/* MODIFICADO: Cambiado min-h-screen por min-h-[100dvh] y añadidas clases flex para controlar el alto en móvil */}
      <main className="min-h-[100dvh] bg-slate-950 text-white flex flex-col justify-between">
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/fundadores" element={<Founders />} />
          </Routes>
        </div>
        
        <Footer />
      </main>

      {/* Componentes independientes renderizados vía Portals */}
      <CookieBanner />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
