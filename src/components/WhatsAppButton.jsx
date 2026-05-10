import { useState, useEffect } from "react";
// Importamos createPortal obligatoriamente
import { createPortal } from "react-dom";

export function WhatsAppButton() {
  const [cookiesAceptadas, setCookiesAceptadas] = useState(() => {
    return localStorage.getItem("cookiesAceptadas") === "true";
  });

  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    if (cookiesAceptadas) {
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
  const url = `wa.me{encodeURIComponent(message)}`;

  // Usamos createPortal para inyectarlo directamente en el body del documento HTML
  return createPortal(
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`fixed right-4 z-[9999] rounded-full bg-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-2xl flex items-center gap-2 transition-all duration-300 ${
        animar 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-75 pointer-events-none"
      } hover:scale-105 hover:bg-green-400`}
      // Sobrescribimos el bottom con !important inline para ganarle a cualquier CSS corrupto
      style={{
        bottom: "20px !important",
        position: "fixed"
      }}
    >
      <span className="text-xl">💬</span>
      WhatsApp
    </a>,
    document.body
  );
}
