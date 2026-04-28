import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Pricing } from "../components/Pricing";
import { Founders } from "../components/Founders";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Founders />
      <Pricing />
      <Contact />
    </>
  );
}