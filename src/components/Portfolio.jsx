const projects = [
  {
    title: "VHSFlix",
    type: "Movie Web App",
    description:
      "Aplicación estilo streaming con catálogo de películas, categorías, búsqueda y favoritos.",
    tech: ["React", "Tailwind", "TMDB API"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Dental Clinic System",
    type: "Sistema de citas",
    description:
      "Plataforma para clínica dental con gestión de pacientes, agenda, roles y panel médico.",
    tech: ["React", "Supabase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Portfolio Personal",
    type: "Marca profesional",
    description:
      "Portfolio moderno para presentar servicios, proyectos y contacto profesional.",
    tech: ["React", "Vite", "CSS"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    link: "https://porfolio-alexis-chi.vercel.app/",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Proyectos que transmiten confianza desde el primer clic.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Diseños modernos, rápidos y enfocados en que cada negocio se vea más
            profesional y consiga más contactos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_#22d3ee33]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-slate-950/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-xl">
                  {project.type}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex font-bold text-cyan-300 transition hover:text-white"
                >
                  Ver proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}