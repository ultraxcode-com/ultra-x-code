const plans = [
  {
    name: "Landing",
    price: "Desde 300€",
    description:
      "Perfecto para empezar a tener presencia online y captar clientes.",
    features: [
      "1 página moderna",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Entrega rápida",
    ],
  },
  {
    name: "Web Profesional",
    price: "Desde 600€",
    description:
      "Ideal para negocios que quieren verse serios y generar más clientes.",
    features: [
      "Varias secciones",
      "Diseño moderno y personalizado",
      "Optimizada para conversiones",
      "Integración WhatsApp",
    ],
    highlighted: true,
  },
  {
    name: "Web Premium",
    price: "Desde 800€",
    description:
      "Para negocios que necesitan funcionalidades más avanzadas.",
    features: [
      "Sistema de reservas o formularios",
      "Panel o funciones personalizadas",
      "Diseño premium",
      "Soporte inicial incluido",
    ],
  },
];

export function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Precios
        </p>

        <h2 className="text-4xl font-black md:text-5xl">
          Inversión clara para resultados reales
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Cada proyecto se adapta a tu negocio. Estos precios son una referencia
          inicial según la complejidad.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition duration-300 ${
                plan.highlighted
                  ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_40px_#22d3ee33] scale-105"
                  : "border-white/10 bg-white/[0.04] hover:-translate-y-2"
              }`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>

              <p className="mt-4 text-3xl font-black text-cyan-300">
                {plan.price}
              </p>

              <p className="mt-4 text-slate-400">{plan.description}</p>

              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <a
                href="/contacto"
                className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-white"
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>

        {/* Nota importante */}
        <p className="mt-12 text-sm text-slate-400">
          Los precios pueden variar según funcionalidades específicas del proyecto.
        </p>
      </div>
    </section>
  );
}