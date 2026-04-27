import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Pricing } from "../components/Pricing";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </>
  );
}