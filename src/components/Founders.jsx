import fotoDani from "../assets/fotoDaniel.jpeg"
import fotoale from "../assets/fotoale.jpeg"

export function Founders() {
  const team = [
    {
      name: "Daniel Díaz",
      role: "Co-Founder & Lead Developer",
      info: "Especialista en React y arquitectura de software. Se encarga de que cada línea de código sea eficiente y escalable.",
      image: fotoDani,
      linkedin: "#",
    },
    {
      name: "Alexis Rodriguez",
      role: "Co-Founder & UI/UX Designer",
      info: "Experto en diseño de interfaces y experiencia de usuario. Su objetivo es que cada web sea visualmente impactante.",
      image: fotoale, 
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Cabecera del componente alineada a la izquierda */}
        <div className="mb-16 text-left"> 
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Los <span className="text-cyan-400">Fundadores</span>
            </h2>
            
            <div className="mt-4 h-1 w-20 bg-cyan-400 rounded-full"></div>
            
            <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            Mentes creativas unidas para transformar ideas en productos digitales de alto rendimiento.
            </p>
        </div>


        {/* Grid de Fundadores */}
        <div className="grid gap-12 md:grid-cols-2 lg:px-20">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              {/* Contenedor de Imagen con efecto */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[450px] w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Degradado sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Info sobre la imagen */}
                <div className="absolute bottom-0 p-8 w-full">
                  <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-3xl font-black text-white mb-4">
                    {member.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {member.info}
                  </p>
                  
                  {/* Botón LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn 
                    <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
