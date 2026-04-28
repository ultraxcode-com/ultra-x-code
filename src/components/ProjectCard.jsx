import { useState, useEffect } from "react";

export function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_#22d3ee33]">
      
      {/* IMAGEN / SLIDER */}
      <div className="relative h-64 overflow-hidden">
        <img
          key={currentImage}
          src={project.images[currentImage]}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-slate-950/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-xl">
          {project.type}
        </span>
      </div>

      {/* CONTENIDO */}
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
  );
}