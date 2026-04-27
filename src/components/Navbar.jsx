import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-400/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-black tracking-[0.25em] text-white"
        >
          ULTRA<span className="text-cyan-400">X</span>CODE
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link to="/servicios" className="transition hover:text-cyan-400">
            Servicios
          </Link>

          <Link to="/portfolio" className="transition hover:text-cyan-400">
            Portfolio
          </Link>

          <Link to="/precios" className="transition hover:text-cyan-400">
            Precios
          </Link>

          <Link to="/contacto" className="transition hover:text-cyan-400">
            Contacto
          </Link>
        </div>

        {/* BOTÓN CTA */}
        <Link
          to="/contacto"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-[0_0_20px_#22d3ee55] transition hover:scale-105 hover:bg-white md:block"
        >
          Empezar
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950 px-6 py-6">
          <div className="flex flex-col gap-6 text-slate-300">
            
            <Link
              to="/servicios"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Servicios
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Portfolio
            </Link>

            <Link
              to="/precios"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Precios
            </Link>

            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Contacto
            </Link>

            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950"
            >
              Empezar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}