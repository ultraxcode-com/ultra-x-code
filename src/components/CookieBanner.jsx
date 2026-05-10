import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Importación obligatoria
import { activarAnalytics } from "../App"; 

const CookieBanner = () => {
  const [mostrarBanner, setMostrarBanner] = useState(false);

  useEffect(() => {
    const consentimiento = localStorage.getItem("cookiesAceptadas");
    if (consentimiento === null) {
      setMostrarBanner(true);
    }
  }, []);

  const handleAceptar = () => {
    localStorage.setItem("cookiesAceptadas", "true");
    activarAnalytics();
    setMostrarBanner(false);
    window.dispatchEvent(new Event("cambioCookies"));
  };

  const handleRechazar = () => {
    localStorage.setItem("cookiesAceptadas", "false");
    setMostrarBanner(false);
    window.dispatchEvent(new Event("cambioCookies"));
  };

  if (!mostrarBanner) return null;

  // Inyectamos el banner directamente en el body para que no altere el layout dinámico del main
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-auto">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p>
            Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. 
            Al hacer clic en "Aceptar", permites el uso de <strong>Google Analytics</strong>.
          </p>
        </div>
        
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleRechazar}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAceptar}
            className="px-6 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all transform active:scale-95"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CookieBanner;
