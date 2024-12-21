import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-items-container">
        <div id="footer-logo">
          <p>
            lidia <span>personal</span>
          </p>
        </div>
        <div id="footer-navigation">
          <h6>Navegação</h6>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#benefits">Vantagens</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#questions">Perguntas</a></li>
          </ul>
        </div>
        <div>
          <h6>Atendimento presencial</h6>
          <ul>
            <li>Rua das Palmeiras, 1050, Sala 201</li>
            <li>Jardim Nova Esperança</li>
            <li>São José do Rio Preto - SP</li>
          </ul>
        </div>
        <div>
          <h6>Contato</h6>
          <ul>
            <li>(17) 98321-3083</li>
            <li>lidia@personaltrainer.com.br</li>
          </ul>
        </div>
      </div>
      <div id="line"></div>
      <div id="social-media-container">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
      <p id="copyright">
        &copy; lidia personal - Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
