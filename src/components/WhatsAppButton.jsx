import { useState, useEffect } from "react";
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

  return createPortal(
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      // Eliminamos clases de posicionamiento y dejamos solo el estilo visual
      className={`z-50 rounded-full bg-green-500 font-bold text-white shadow-2xl flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:bg-green-400 select-none active:scale-95 ${
        animar ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      style={{
        // Posicionamiento absoluto e inmune a páginas cortas
        position: "fixed",
        top: "calc(100vh - 65px - env(safe-area-inset-bottom, 0px))",
        right: "16px",
        height: "46px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "14px",
        // Animación de latido sutil nativa sobre el propio botón
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }}
    >
      {/* Añadimos los keyframes del latido directamente en una etiqueta style */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .95; transform: scale(1.03); }
        }
      `}</style>

      {/* Icono SVG Oficial de WhatsApp */}
      <svg
        style={{ width: "20px", height: "20px", fill: "currentColor", flexShrink: 0 }}
        viewBox="0 0 24 24"
        xmlns="w3.org"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.165.001 6.14 1.233 8.377 3.469 2.237 2.235 3.469 5.211 3.469 8.377-.003 6.582-5.338 11.93-11.87 11.93h-.004c-2.003 0-3.974-.545-5.731-1.584L0 24zm6.29-4.174c1.677 1 3.633 1.529 5.631 1.53h.004c5.441 0 9.866-4.424 9.868-9.866.002-2.637-1.023-5.116-2.882-6.976C17.1 2.652 14.62 1.627 11.927 1.627c-5.443 0-9.867 4.425-9.869 9.868-.001 2.03.53 4.022 1.54 5.734l-.99 3.612 3.738-.98zM17.48 14.86c-.3-.15-1.774-.875-2.05-.975-.274-.1-.474-.15-.673.15-.2.3-.773.975-.948 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.466-2.41-1.487-.893-.796-1.496-1.78-1.67-2.08-.175-.3-.02-.463.13-.612.134-.133.3-.349.45-.523.149-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.673-1.624-.923-2.223-.243-.585-.49-.506-.673-.515-.173-.008-.373-.01-.572-.01-.2 0-.525.075-.8.375-.274.3-1.048 1.024-1.048 2.497 0 1.473 1.073 2.896 1.223 3.096.149.2 2.11 3.221 5.11 4.516.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.119.574-.085 1.774-.725 2.023-1.424.25-.699.25-1.3.175-1.424-.075-.125-.275-.2-.575-.35z" />
      </svg>
      <span>WhatsApp</span>
    </a>,
    document.body
  );
}
