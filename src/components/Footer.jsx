import { Link } from "react-router-dom";

export function Footer() {
  const message = "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";
  const whatsappUrl = `https://wa.me/34643804335?text=${encodeURIComponent(message)}`;
  const emailUrl = "mailto:info@ultraxcode.com";

  return (
    <footer className="relative border-t border-white/10 bg-black/20 px-6 py-8 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4 items-start">
        
        {/* Columna 1: Branding - Logo más imponente */}
        <div className="space-y-4">
          <p className="text-2xl font-black tracking-[0.2em] text-white">
            ULTRA<span className="text-cyan-400">X</span>CODE
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Soluciones digitales de alto impacto.
          </p>
          <div className="flex gap-5">
            <a 
              href="https://www.instagram.com/ultraxcodeweb?utm_source=qr&igsh=MWdlcjVvZHpsYjNmMA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            
          </div>
        </div>

        {/* Columna 2: Navegación - Enlaces más legibles */}
        <div>
          <h4 className="mb-3 font-bold uppercase tracking-widest text-xs text-white/60">Menú</h4>
          <ul className="space-y-2 text-slate-300 text-base">
            {["Servicios", "Portfolio", "Precios", "Contacto"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto - Botones con texto claro */}
        <div className="md:col-span-2">
          <h4 className="mb-3 font-bold uppercase tracking-widest text-xs text-white/60">Hablemos</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-green-500/10 transition-all group"
            >
              <div className="rounded-lg bg-green-500/20 p-2 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-slate-500">WhatsApp</p>
                <p className="text-sm md:text-base font-semibold text-slate-200">+34 643 80 43 35</p>
              </div>
            </a>

            <a
              href={emailUrl}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="rounded-lg bg-cyan-500/20 p-2 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-colors">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-slate-500">Email</p>
                <p className="text-sm md:text-base font-semibold text-slate-200 truncate">info@ultraxcode.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/ultraxcodeweb?utm_source=qr&igsh=MWdlcjVvZHpsYjNmMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-pink-500/10 transition-all group"
            >
              <div className="rounded-lg bg-pink-500/20 p-2 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-slate-500">Instagram</p>
                <p className="text-sm md:text-base font-semibold text-slate-200 truncate">@ultraxcodeweb</p>
              </div>
            </a>

            <a
              href="https://github.com/ultraxcode-com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-all group"
            >
              <div className="rounded-lg bg-white/10 p-2 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-slate-500">Open Source</p>
                <p className="text-sm md:text-base font-semibold text-slate-200 truncate">ultraxcode-com</p>
              </div>
            </a>


          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">UltraXCode</span>. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
}
