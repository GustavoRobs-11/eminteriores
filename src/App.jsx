// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Footer from "./Comuns/Footer";
import NavBar from "./Comuns/NavBar";
import Portfolio from "./Pages/Portfolio";
import ComoFunciona from "./Pages/ComoFunciona";
import Contato from "./pages/Contato";
import LandingPage from "./pages/LandingPage";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/portfolio" element={<Portfolio />} />

                <Route path="/como-funciona" element={<ComoFunciona />} />

                <Route path="/contato" element={<Contato />} />


                {/* Página 404 opcional */}
                <Route path="*" element={<h1>Página não encontrada</h1>} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
