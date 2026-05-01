export function Contact() {
  const message =
    "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";

  const whatsappUrl = `https://wa.me/34643804335?text=${encodeURIComponent(
    message
  )}`;

  const emailUrl =
    "mailto:info@ultraxcode.com?subject=Solicitud%20de%20p%C3%A1gina%20web&body=Hola,%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web.";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 p-8 text-center shadow-[0_0_60px_#22d3ee22] md:p-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Contacto
        </p>

        <h2 className="text-4xl font-black md:text-5xl">
          ¿Listo para crear una web que destaque?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Escríbeme por WhatsApp o email y vemos qué necesita tu negocio.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-400"
          >
            Contactar por WhatsApp
          </a>

          <a
            href={emailUrl}
            className="rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Enviar email
          </a>
        </div>

        <p className="mt-5 text-sm text-slate-400">
          Respuesta rápida ⚡ | Sin compromiso
        </p>
      </div>
    </section>
  );
}