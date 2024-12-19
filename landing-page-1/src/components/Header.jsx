import "./Header.css";

const Header = () => {
  return (
    <header id="home">
      <div id="logo">
        <p>lidia <span>personal</span></p>
      </div>
      <nav>
        <ul>
          <a href="#home">
            <li className="nav-item">Início</li>
          </a>
          <a href="#benefits">
            <li className="nav-item">Vantagens</li>
          </a>
          <a href="#testimonials">
            <li className="nav-item">Depoimentos</li>
          </a>
          <a href="#questions">
            <li className="nav-item">Perguntas</li>
          </a>
        </ul>
      </nav>
      <div id="contact-button-container">
        <button className="btn" id="contact-button">
          Agendar Horário
        </button>
      </div>
    </header>
  );
};

export default Header;
