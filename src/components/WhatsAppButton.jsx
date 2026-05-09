import { useState, useEffect } from "react";

export function WhatsAppButton() {
  // Estado inicial: si no hay datos en localStorage, asumimos que el banner se va a mostrar
  const [bannerOculto, setBannerOculto] = useState(() => {
    return localStorage.getItem("cookiesAceptadas") !== null;
  });

  useEffect(() => {
    // Función que actualiza la posición cuando el banner desaparece
    const comprobarPosicion = () => {
      const consentimiento = localStorage.getItem("cookiesAceptadas");
      if (consentimiento !== null) {
        setBannerOculto(true);
      }
    };

    // Escucha el evento personalizado emitido por CookieBanner
    window.addEventListener("cambioCookies", comprobarPosicion);
    
    return () => {
      window.removeEventListener("cambioCookies", comprobarPosicion);
    };
  }, []);

  const message =
    "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";

  const url = `https://wa.me/34668550112?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      // Si el banner está oculto usa bottom-6
      // Si el banner está visible usa bottom-40 en móviles (por si se apila el texto) y bottom-24 en PC
      className={`fixed ${
        bannerOculto ? "bottom-6" : "bottom-40 md:bottom-24"
      } right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-400 flex items-center gap-2`}
    >
      <span className="text-xl">💬</span>
      WhatsApp
    </a>
  );
}
