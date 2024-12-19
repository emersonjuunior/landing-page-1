import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="logo">
        <p>lidia <span>personal</span></p>
      </div>
      <nav>
        <ul>
          <a href="#">
            <li className="nav-item">Início</li>
          </a>
          <a href="#">
            <li className="nav-item">Vantagens</li>
          </a>
          <a href="#">
            <li className="nav-item">Depoimentos</li>
          </a>
          <a href="#">
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
