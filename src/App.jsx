import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { PortfolioPage } from "./pages/PortfolioPage";
import { Precios } from "./pages/Precios";
import { Contacto } from "./pages/Contacto";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
        <WhatsAppButton/>
      </main>
    </BrowserRouter>
  );
}

export default App;