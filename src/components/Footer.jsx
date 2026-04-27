import { Link } from "react-router-dom";

export function Footer() {
  const message =
    "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";

  const whatsappUrl = `https://wa.me/34643804335?text=${encodeURIComponent(
    message
  )}`;

  const emailUrl =
    "mailto:inf.ultraxcode@gmail.com?subject=Solicitud%20de%20p%C3%A1gina%20web&body=Hola,%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web.";

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-black tracking-[0.25em] text-white">
            ULTRA<span className="text-cyan-400">X</span>CODE
          </p>

          <p className="mt-4 text-slate-400">
            Desarrollo web moderno para negocios que quieren crecer.
          </p>
        </div>

        <div>
          <p className="mb-3 font-bold">Enlaces</p>

          <ul className="space-y-2 text-slate-400">
            <li>
              <Link to="/servicios" className="hover:text-cyan-400">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-cyan-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/precios" className="hover:text-cyan-400">
                Precios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-cyan-400">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-bold">Contacto</p>

          <div className="space-y-2 text-slate-400">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-green-400"
            >
              WhatsApp directo
            </a>

            <a href={emailUrl} className="block hover:text-cyan-400">
              inf.ultraxcode@gmail.com
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        © 2026 UltraXCode. Todos los derechos reservados.
      </p>
    </footer>
  );
}