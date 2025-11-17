// HeroSocial.jsx
import React from "react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import "../../styles/LandingPage/LandingPage.css";
import heroImg from "../../img/LandingPage/foto-2.jpg";

export default function HeroSocial() {
  return (
    <section className="hero-social-section">
      
      <div className="hero-social-image-wrapper">
        <img 
          src={heroImg} 
          alt="Foto da designer" 
          className="hero-social-img" 
        />
      </div>

      <div className="hero-social-content">

        <a href="#catalogo" className="hero-social-btn">
          Catálogo de Ambientes
        </a>

        <a href="#como-trabalhamos" className="hero-social-btn">
          Como Trabalhamos
        </a>

        <div className="hero-social-icons">
          <a href="#" className="hero-icon">
            <FaInstagram />
          </a>

          <a href="#" className="hero-icon">
            <FaWhatsapp />
          </a>

          <a href="#" className="hero-icon">
            <FaTiktok />
          </a>
        </div>

      </div>

    </section>
  );
}
