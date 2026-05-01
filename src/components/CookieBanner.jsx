import { useState, useEffect } from "react";
import { activarAnalytics } from "../App"; // Importamos la función de App.jsx

const CookieBanner = () => {
  const [mostrarBanner, setMostrarBanner] = useState(false);

  useEffect(() => {
    // Comprobamos si ya existe una decisión previa en el navegador
    const consentimiento = localStorage.getItem("cookiesAceptadas");
    
    // Si no hay registro (null), mostramos el banner
    if (consentimiento === null) {
      setMostrarBanner(true);
    }
  }, []);

  const handleAceptar = () => {
    // 1. Guardamos la decisión para que no vuelva a salir
    localStorage.setItem("cookiesAceptadas", "true");
    
    // 2. Activamos Google Analytics inmediatamente
    activarAnalytics();
    
    // 3. Ocultamos el banner
    setMostrarBanner(false);
  };

  const handleRechazar = () => {
    // Guardamos "false" para recordar que el usuario no quiere rastreo
    localStorage.setItem("cookiesAceptadas", "false");
    setMostrarBanner(false);
  };

  // Si el usuario ya decidió, no renderizamos nada
  if (!mostrarBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p>
            Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. 
            Al hacer clic en "Aceptar", permites el uso de **Google Analytics**.
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
    </div>
  );
};

export default CookieBanner;
