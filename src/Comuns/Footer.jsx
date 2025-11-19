import "../styles/Comuns/Footer.css";
import logo from "../img/Logos/logoBranca.png"; // coloque sua logo branca aqui
import { Link } from 'react-router-dom'

import { FaInstagram, FaWhatsapp, FaTiktok, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LOGO */}
        <Link to='/'>
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* BLOCOS: NAVEGAÇÃO + REDES */}
        <div className="footer-blocks">
          {/* NAVEGAÇÃO */}
          <div className="footer-section">
            <h3>Navegação</h3>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contato">Contato</a>
          </div>

          {/* REDES SOCIAIS */}
          <div className="footer-section">
            <h3>Redes</h3>

            <div className="social-item">
              <FaInstagram className="icon" />
              <a href="#">Instagram</a>
            </div>

            <div className="social-item">
              <FaWhatsapp className="icon" />
              <a href="#">WhatsApp</a>
            </div>

            <div className="social-item">
              <FaTiktok className="icon" />
              <a href="#">Tiktok</a>
            </div>
          </div>
        </div>

      </div>

      {/* LINHA DE CIMA DO COPYRIGHT */}
      <div className="footer-bottom">
        <div className="copyright-left">
          <FaRegCopyright className="icon" />
          <p>2025 – Eduarda Silva Prado. Todos os direitos reservados.</p>
        </div>

        <p className="dev-by">Desenvolvido por GustaWebsites</p>
      </div>
    </footer>
  );
}
