// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Componentes
import Footer from "./Comuns/Footer";
import NavBar from "./Comuns/NavBar";
import ScrollToTop from "./Comuns/ScrollToTop";

// Páginas
import Portfolio from "./Pages/Portfolio";
import ComoFunciona from "./Pages/ComoFunciona";
import Contato from "./pages/Contato";
import LandingPage from "./pages/LandingPage";
import LinkBridge from "./pages/LinkBridge";

export default function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<LinkBridge />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/home" element={<LandingPage />} />

        {/* Página 404 */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
