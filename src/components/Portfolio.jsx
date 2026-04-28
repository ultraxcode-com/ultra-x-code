import { ProjectCard } from "./ProjectCard";
import vhsflix1 from "../assets/vhsflix/vhsflix1.png"
import vhsflix2 from "../assets/vhsflix/vhsflix2.png"
import vhsflix3 from "../assets/vhsflix/vhsflix3.png"
import vhsflix4 from "../assets/vhsflix/vhsflix4.png"
import odontologia1 from "../assets/odontologia/odontologia1.png"
import odontologia2 from "../assets/odontologia/odontologia2.png"
import odontologia3 from "../assets/odontologia/odontologia3.png"
import odontologia4 from "../assets/odontologia/odontologia4.png"
import odontologia5 from "../assets/odontologia/odontologia5.png"
import odontologia6 from "../assets/odontologia/odontologia6.png"
import panaderia1 from "../assets/panaderia/panaderia1.png"
import panaderia2 from "../assets/panaderia/panaderia2.png"
import panaderia3 from "../assets/panaderia/panaderia3.png"
import panaderia4 from "../assets/panaderia/panaderia4.png"
import panaderia5 from "../assets/panaderia/panaderia5.png"
import priteca1 from "../assets/priteca/priteca1.png"
import priteca3 from "../assets/priteca/priteca3.png"
import priteca4 from "../assets/priteca/priteca4.png"
import priteca5 from "../assets/priteca/priteca5.png"
import priteca6 from "../assets/priteca/priteca6.png"
import rva1 from "../assets/Rva-porcelanatos/rva1.png"
import rva2 from "../assets/Rva-porcelanatos/rva2.png"
import rva3 from "../assets/Rva-porcelanatos/rva3.png"
import rva4 from "../assets/Rva-porcelanatos/rva4.png"
import rva5 from "../assets/Rva-porcelanatos/rva5.png"
import rva6 from "../assets/Rva-porcelanatos/rva6.png"



const projects = [
  {
    title: "VHSFlix",
    type: "Movie Web App",
    description:
      "Aplicación estilo streaming con catálogo de películas, categorías, búsqueda y favoritos.",
    tech: ["React", "Tailwind", "TMDB API"],
    images: [
      vhsflix1,
      vhsflix2,
      vhsflix3,
      vhsflix4
    ],
    link: "https://vhsflix.vercel.app/",
  },

  {
    title: "Dental Clinic System",
    type: "Sistema de citas",
    description:
      "Plataforma para clínica dental con gestión de pacientes, agenda, roles y panel médico.",
    tech: ["React", "Supabase", "Tailwind"],
    images: [
      odontologia1,
      odontologia2,
      odontologia3,
      odontologia4,
      odontologia5,
      odontologia6,
    ],
    link: "https://consultorio-odontologico-lac.vercel.app/",
  },

  {
    title: "Priteca",
    type: "Reformas y construcción",
    description:
      "Página profesional para empresa de reformas y construcción, enfocada en transmitir confianza, servicios claros y contacto directo.",
    tech: ["React", "Tailwind", "Vite"],
    images: [
    priteca1,
    priteca3,
    priteca4,
    priteca5,
    priteca6,
    ],
    link: "https://priteca-web.vercel.app/",
  },

  {
    title: "Panadería Web",
    type: "Página de negocio",
    description:
      "Landing moderna para panadería con presentación de productos, diseño cálido y enfoque comercial.",
    tech: ["React", "Tailwind", "UI/UX"],
    images: [
  panaderia1,
    panaderia2,
      panaderia3,
        panaderia4,
          panaderia5,
    ],
    link: "https://panaderia-peach.vercel.app/",
  },
  {
    title: "Grupo RVA",
    type: "Pisos y acabados",
    description:
      "Sitio web corporativo para negocio de porcelanatos, pisos y acabados, con una presentación visual orientada a productos y confianza comercial.",
    tech: ["React", "Tailwind", "Vite"],
    images: [
    rva1,
    rva2,
    rva3,
    rva4,
    rva5,
    rva6,
    ],
    link: "https://grupo-rva.vercel.app/",
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}