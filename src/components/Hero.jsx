import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf;
    let mouse = { x: -9999, y: -9999 };

    // --- 1. CONFIGURACIÓN DE RESOLUCIÓN COMPLETA ---
    const dpr = window.devicePixelRatio || 1;
    const isMobile = window.innerWidth < 768;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      if (!canvas) return;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    // --- 2. GENERADOR DE PARTÍCULAS ULTRAXCODE ---
    const particleCount = isMobile ? 40 : 100;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 2.5,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchstart", move);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx; 
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        let renderX = p.x;
        let renderY = p.y;

        const dx = mouse.x - renderX;
        const dy = mouse.y - renderY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          renderX -= dx * force * 0.3;
          renderY -= dy * force * 0.3;
        }

        // Estilo de Glow Cian
        const glow = ctx.createRadialGradient(renderX, renderY, 0, renderX, renderY, p.r * 5);
        glow.addColorStop(0, "rgba(34, 211, 238, 0.95)"); 
        glow.addColorStop(0.4, "rgba(6, 182, 212, 0.4)"); 
        glow.addColorStop(1, "rgba(2, 6, 23, 0)"); 

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.r * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // LÍNEAS DE CONEXIÓN REFORZADAS
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(renderX - q.x, renderY - q.y);
          
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(q.x, q.y);
            
            // Opacidad aumentada a 0.65 para una visibilidad nítida
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.65 - d / 250})`;
            // Grosor aumentado a 1.5px
            ctx.lineWidth = 1.5; 
            
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchstart", move);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] px-6 pt-24 text-white">
      
      {/* CAPA DE FONDO INFERIOR (Fondo + Aurora + Grid) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Aurora animada en azul/cian */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(120deg,#020617,#0f172a,#1e293b,#0891b2,#0369a1,#020617)] bg-[length:500%_500%] opacity-60"
        />

        {/* Grid técnico */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "130px 130px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#22d3ee15_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee15_1px,transparent_1px)] bg-[size:130px_130px]"
        />
      </div>

      {/* CANVAS DE CONSTELACIONES EN CAPA INTERMEDIA INLINE (z-index: 2) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 h-full w-full pointer-events-none" 
        style={{ zIndex: 2, display: "block" }}
      />

      {/* CONTENIDO TEXTUAL EN LA CAPA SUPERIOR (z-index: 3) */}
      <div className="relative mx-auto w-full max-w-7xl" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            Webs profesionales para negocios que quieren vender más
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Tu negocio necesita una web que{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              genere clientes
            </span>
            , no solo visitas.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            En UltraXCode creamos páginas web modernas, rápidas y pensadas para
            que tus clientes confíen en tu marca y te contacten más rápido.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contacto"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.4)] transition hover:scale-105 hover:bg-white"
            >
              Quiero conseguir más clientes
            </Link>

            <Link
              to="/portfolio"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Ver proyectos
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            <strong>Respuesta rápida y eficiente.</strong>
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>✓ Diseño moderno</span>
            <span>✓ Web responsive</span>
            <span>✓ Más clientes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
