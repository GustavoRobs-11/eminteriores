import { useEffect, useState } from "react";
import "../styles/Comuns/NavBar.css";
import logo from "../img/Logos/logoAzul.png";
import { Link } from 'react-router-dom'

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

        <Link to='/'>
          <div className="logo-area">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </Link>


        {/* Botão Mobile com ícone */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Menu */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link to='/como-funciona'>
            <a>Como Funciona</a>
          </Link>
          <Link to='/portfolio'>
            <a>Portfólio</a>
          </Link>
          <Link to='/contato'>
            <a>Contato</a>
          </Link>
        </nav>

      </div>
    </header>
  );
}
