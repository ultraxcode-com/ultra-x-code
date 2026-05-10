import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [cookiesAceptadas, setCookiesAceptadas] = useState(() => {
    return localStorage.getItem("cookiesAceptadas") === "true";
  });

  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    if (cookiesAceptadas) {
      // Un pequeño delay para que la transición de entrada funcione suave
      const timer = setTimeout(() => setAnimar(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimar(false);
    }
  }, [cookiesAceptadas]);

  useEffect(() => {
    const comprobarConsentimiento = () => {
      const consentimiento = localStorage.getItem("cookiesAceptadas");
      if (consentimiento === "true") {
        setCookiesAceptadas(true);
      }
    };

    window.addEventListener("cambioCookies", comprobarConsentimiento);
    
    return () => {
      window.removeEventListener("cambioCookies", comprobarConsentimiento);
    };
  }, []);

  if (!cookiesAceptadas) return null;

  const message = "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";
  const url = `https://wa.me/34668550112?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      // Eliminadas por completo las clases antiguas bottom-32, bottom-40 y md:bottom-20
      className={`fixed right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-lg flex items-center gap-2 transform transition-all duration-500 ease-out ${
        animar 
          ? "bottom-6 opacity-100 translate-y-0 scale-100" 
          : "bottom-6 opacity-0 translate-y-10 scale-75 pointer-events-none"
      } hover:scale-105 hover:bg-green-400`}
    >
      <span className="text-xl">💬</span>
      WhatsApp
    </a>
  );
}
