import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cta">
        <h2>Gostou do meu conteúdo?</h2>
        <p>Visite meu site principal e siga-me nas redes sociais para mais dicas e conteúdos sobre programação!</p>
        <div className="cta-buttons">
          <a href="https://meusite.com" target="_blank" rel="noopener noreferrer" className="cta-link">
            Acesse meu site
          </a>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram /> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTiktok /> TikTok
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pedro Van-Lume. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
