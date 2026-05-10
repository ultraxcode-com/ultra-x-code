import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Pricing } from "../components/Pricing";
import { Founders } from "../components/Founders";

export function Home() {
  return (
    // Añadimos un contenedor que asegure un colchón de espacio abajo (pb-20) 
    // para que el último texto de la sección Contact nunca se pegue al botón de WhatsApp
    <div className="pb-20 md:pb-0">
      <Hero />
      <Services />
      <Founders />
      <Pricing />
      <Contact />
    </div>
  );
}
