export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee22,transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            UltraXCode
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Tecnología, diseño y estrategia en una sola web.
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            No hacemos páginas web genéricas. Creamos sitios pensados para que
            tu negocio se vea más profesional, transmita confianza y ayude a
            conseguir más clientes.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Cada proyecto se diseña con enfoque en velocidad, claridad visual,
            adaptación móvil y una experiencia sencilla para el usuario.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-7">
            <p className="text-4xl font-black text-cyan-300">01</p>
            <h3 className="mt-4 text-xl font-bold">Diseño premium</h3>
            <p className="mt-3 text-slate-300">
              Interfaces modernas, limpias y adaptadas a tu marca.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-4xl font-black text-cyan-300">02</p>
            <h3 className="mt-4 text-xl font-bold">Web responsive</h3>
            <p className="mt-3 text-slate-300">
              Perfecta en móvil, tablet y ordenador.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-4xl font-black text-cyan-300">03</p>
            <h3 className="mt-4 text-xl font-bold">Código moderno</h3>
            <p className="mt-3 text-slate-300">
              React, Tailwind y buenas prácticas frontend.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-blue-500/10 p-7">
            <p className="text-4xl font-black text-cyan-300">04</p>
            <h3 className="mt-4 text-xl font-bold">Enfoque comercial</h3>
            <p className="mt-3 text-slate-300">
              Diseñada para que el visitante contacte contigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;