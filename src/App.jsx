// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Body from "./Componentes/LandingPage/Body";
import Footer from "./Comuns/Footer";
import NavBar from "./Comuns/NavBar";
//import Catalogo from "./Pages/Catalogo";
//import ComoTrabalhamos from "./Pages/ComoTrabalhamos";
//import Contato from "./Pages/Contato";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Body />} />

                {/*<Route path="/catalogo" element={<Catalogo />} />

        <Route path="/como-trabalhamos" element={<ComoTrabalhamos />} />

        <Route path="/contato" element={<Contato />} />
        */}

                {/* Página 404 opcional */}
                <Route path="*" element={<h1>Página não encontrada</h1>} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
