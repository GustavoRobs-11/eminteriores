import { useEffect, useState } from "react";
import "../styles/Comuns/NavBar.css";
import logo from "../img/Logos/logoAzul.png";

export default function NavBar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // Descendo → esconde
        setShowHeader(false);
      } else {
        // Subindo → mostra
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

        <nav className="nav-menu">
          <a href="#como-funciona">Como Funciona</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>

      </div>
    </header>
  );
}
