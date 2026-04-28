const services = [
  {
    title: "Páginas web profesionales",
    description:
      "Sitios modernos, rápidos y adaptados a móviles para negocios que quieren destacar.",
  },
  {
    title: "Landing pages que convierten",
    description:
      "Páginas enfocadas en captar clientes, reservas, mensajes y ventas.",
  },
  {
    title: "Sistemas de citas",
    description:
      "Automatiza reservas para clínicas, barberías, estéticas, estudios y más.",
  },
  {
    title: "Rediseño web",
    description:
      "Modernizamos páginas antiguas para que transmitan confianza y profesionalismo.",
  },
  {
    title: "Optimización de velocidad",
    description:
      "Mejoramos carga, estructura y experiencia para que tu web sea más efectiva.",
  },
  {
    title: "Mantenimiento mensual",
    description:
      "Actualizaciones, pequeños cambios, mejoras visuales y soporte continuo.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Servicios
          </p>


          <h2 className="text-4xl font-black md:text-5xl">
            Soluciones digitales para hacer crecer tu negocio.
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-400 rounded-full"></div>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Creamos experiencias web limpias, rápidas y enfocadas en generar
            confianza desde el primer clic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl shadow-[0_0_30px_#22d3ee33]">
                ✦
              </div>

              <h3 className="text-xl font-bold text-white">{service.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}