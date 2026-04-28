import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/fondohero.jpeg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      
      {/* Imagen de fondo animada */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <img
          src={heroImg}
          alt="Fondo desarrollo web"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />

      {/* Glow animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#22d3ee33,transparent_40%)]"
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid futurista */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

      {/* CONTENIDO */}
      <div className="relative mx-auto w-full max-w-7xl">
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
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              genere clientes
            </span>
            , no solo visitas.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            En UltraXCode creamos páginas web modernas, rápidas y pensadas para
            que tus clientes confíen en tu marca y te contacten más rápido.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            
            <Link
              to="/contacto"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-slate-950 shadow-[0_0_40px_#22d3ee66] transition hover:scale-105 hover:bg-white"
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
            Respuesta rápida ⚡ | Sin compromiso
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