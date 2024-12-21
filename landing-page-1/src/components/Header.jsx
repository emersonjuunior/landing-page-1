import { useState, useEffect } from "react";
import "./Header.css";
import Menu from "./Menu.jsx";
import useActiveSection from "../hooks/useActiveSection";

const Header = () => {
  const activeSection = useActiveSection();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const body = document.querySelector("body");
  const menuBurger = document.querySelector("menu");
  if (menuBurger) {
    body.addEventListener("click", (e) => {
      if (menuBurger.contains(e.target)) {
        return;
      } else {
        setMenu(false);
      }
    });
  }

  return (
    <>
      <header>
        <div id="logo">
          <p>
            lidia <span>personal</span>
          </p>
        </div>
        <nav>
          <ul>
            <a href="#hero">
              <li
                className={`nav-item ${
                  activeSection === "hero" ? "active" : ""
                }`}
              >
                Início
              </li>
            </a>
            <a href="#benefits">
              <li
                className={`nav-item ${
                  activeSection === "benefits" ? "active" : ""
                }`}
              >
                Vantagens
              </li>
            </a>
            <a href="#testimonials">
              <li
                className={`nav-item ${
                  activeSection === "testimonials" ? "active" : ""
                }`}
              >
                Depoimentos
              </li>
            </a>
            <a href="#questions">
              <li
                className={`nav-item ${
                  activeSection === "questions" ? "active" : ""
                }`}
              >
                Perguntas
              </li>
            </a>
          </ul>
        </nav>
        <div id="contact-button-container">
          <button className="btn" id="contact-button">
            Agendar Horário
          </button>
        </div>
        <menu>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </menu>
      </header>
      {menu && <Menu />}
    </>
  );
};

export default Header;
