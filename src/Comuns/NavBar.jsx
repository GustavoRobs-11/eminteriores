import { useEffect, useState } from "react";
import "../styles/Comuns/NavBar.css";
import logo from "../img/Logos/logoAzul.png";

// Ícones
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShowHeader(false); 
      } else {
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header className={showHeader ? "show" : "hide"}>
      <div className="header-content">

        <div className="logo-area">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Botão Mobile com ícone */}
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Menu */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como Funciona</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>

      </div>
    </header>
  );
}
