import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div id="titles-container">
        <div id="titles-wrapper">
          <h1>
            Trans<span className="degrade-1">f</span>
            <span className="degrade-2">o</span>
            <span className="degrade-3">r</span>
            <span className="degrade-4">m</span>
            <span className="degrade-5">e</span> seu Corpo <span className="degrade-2">&</span><span className="degrade-4">&</span> sua Confiança.
          </h1>
          <h2>
            Treinamentos totalmente personalizados, focados em resultados reais
            e no bem-estar físico e mental.
          </h2>
          <div id="cta-container">
            <button className="btn" id="cta-button">quero transformar minha vida</button>
          </div>
          <div id="social-prove-container">
        <div className="social-prove-items">
          <div className="plus">+</div>
          <div className="social-description"><p>10 <span>anos</span></p>
          <p>de experiência</p></div>
        </div>
        <div className="social-prove-items">
          <div className="plus">+</div>
          <div className="social-description"><p>5000 <span>kg</span></p>
          <p>eliminados</p></div>
        </div>
        <div className="social-prove-items">
          <div className="plus">+</div>
          <div className="social-description"><p>2 <span>mil</span></p>
          <p>alunos</p></div>
        </div>
      </div>
        </div>
      </div>
      <div id="image-container">
        <img src="/lidia.png" alt="Lídia Personal" />
      </div>
    </section>
  );
};

export default Hero;
