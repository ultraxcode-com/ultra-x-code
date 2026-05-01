import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "#fff", borderTop: "1px solid #e5e7eb",
      padding: "1rem 1.5rem", display: "flex",
      alignItems: "center", gap: "1rem",
      flexWrap: "wrap", zIndex: 9999,
      boxShadow: "0 -2px 8px rgba(0,0,0,0.06)"
    }}>
      <p style={{ flex: 1, margin: 0, fontSize: "13px", color: "#6b7280", minWidth: "200px" }}>
        Usamos cookies técnicas esenciales para que el sitio funcione correctamente.
        No usamos cookies de seguimiento ni publicidad.{" "}
        <a href="/politica-cookies" style={{ color: "#3b82f6" }}>Más información</a>
      </p>
      <button onClick={handleAccept} style={{
        padding: "8px 20px", background: "#111", color: "#fff",
        border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px"
      }}>
        Entendido
      </button>
    </div>
  );
}