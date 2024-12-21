import "./Benefits.css";

const Benefits = () => {
  return (
    <section id="benefits">
      <h3>
        O que eu vou <span>transformar</span> na sua <span>vida</span>?
      </h3>
      <div id="benefits-container">
        <div className="benefits-item">
          <div className="benefits-content">
            <img src="/landing-page-1/body.svg" alt="Corpo" />
            <h4>Seu <span>corpo</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                Desenvolva uma rotina de treinos que vai transformar sua forma
                física, tonificando músculos, queimando gordura e aumentando sua
                força, tudo com resultados visíveis e duradouros.
              </p>
            </div>
          </div>
          <div className="benefits-content">
            <img src="/landing-page-1/trust.svg" alt="Confiança" />
            <h4>Sua <span>confiança</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                Ao ver os resultados no seu corpo e se sentir mais saudável, sua
                autoestima vai crescer, e você vai se sentir mais segura e
                empoderada em cada momento do seu dia.
              </p>
            </div>
          </div>
          <div className="benefits-content">
            <img src="/landing-page-1/energy.svg" alt="Energia" />
            <h4>Sua <span>energia</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                Com treinos feitos sob medida para o seu nível, você vai se
                sentir mais energizada, pronta para encarar os desafios do dia a
                dia e aproveitar ao máximo a vida.
              </p>
            </div>
          </div>
        </div>
        <div className="benefits-item">
          <div className="benefits-content">
            <img src="/landing-page-1/mental-health.svg" alt="Saúde Mental" />
            <h4>Sua <span>saúde mental</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                O exercício físico é uma poderosa ferramenta para melhorar sua
                saúde mental. Com a prática regular, você vai sentir menos
                estresse, mais clareza mental e uma sensação constante de
                bem-estar.
              </p>
            </div>
          </div>
          <div className="benefits-content">
            <img src="/landing-page-1/lifestyle.svg" alt="Estilo de vida" />
            <h4>Seu <span>estilo de vida</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                Vou te ajudar a adotar hábitos saudáveis, com treinos que se
                encaixam na sua rotina e dicas de alimentação para promover um
                estilo de vida equilibrado e sustentável.
              </p>
            </div>
          </div>
          <div className="benefits-content">
            <img src="/landing-page-1/persistence.svg" alt="Persistência" />
            <h4>Sua <span>persistência</span></h4>
            <div className="decoration"></div>
            <div className="benefits-description">
              <p>
                Com o acompanhamento constante, você vai aprender a se manter
                disciplinada, com motivação para continuar seu progresso e não
                desistir das suas metas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
