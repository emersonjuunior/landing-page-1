import "./Menu.css";
import useActiveSection from "../hooks/useActiveSection";

const Menu = () => {
  const activeSection = useActiveSection();
  return (
    <div id="menu-container">
      <ul id="menu-ul">
        <a href="#hero">
          <li className={activeSection === "hero" ? "active" : ""}>Início</li>
        </a>
        <a href="#benefits">
          <li className={activeSection === "benefits" ? "active" : ""}>
            Vantagens
          </li>
        </a>
        <a href="#testimonials">
          <li className={activeSection === "testimonials" ? "active" : ""}>
            Depoimentos
          </li>
        </a>
        <a href="#questions">
          <li className={activeSection === "questions" ? "active" : ""}>Perguntas</li>
        </a>
      </ul>
    </div>
  );
};

export default Menu;
