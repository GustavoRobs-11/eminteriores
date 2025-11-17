import React from "react";
import "../../styles/LandingPage/LandingPage.css";
import heroImg from "../../img/LandingPage/foto-1.png"; // <- ajuste o caminho para sua imagem

export default function Hero() {
  return (
    <section className="hero" role="img" aria-label="Foto da designer com tablet">
      <img src={heroImg} alt="Designer com tablet segurando equipamento" className="hero-img" />

      <div className="hero-overlay">
        <div className="hero-card">
          <h1 className="hero-title">Seu lar, um reflexo<br/>do seu viver!</h1>
          <a href="#portfolio" className="hero-cta">Conheça nosso trabalho</a>
        </div>
      </div>
    </section>
  );
}
