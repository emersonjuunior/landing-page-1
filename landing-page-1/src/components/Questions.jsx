import "./Questions.css";
import { useState } from "react";
import { questions } from "../data/questions";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));

  const toggleQuestion = (index) => {
    setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <section id="questions">
      <h3><span>Perguntas</span> Frequentes</h3>
      <div id="questions-container">
        {questions.map((question, index) => (
          <div className="questions-item" key={question.id}>
            <div
              className="questions-title"
              onClick={() => toggleQuestion(index)}
            >
              <div>
                <h5>{question.title}</h5>
              </div>
              <div>
                <img
                  src="/landing-page-1/caret-down.svg"
                  alt="Setinha para abrir pergunta"
                  className={isOpen[index] ? "caret up" : "caret down"}
                />
              </div>
            </div>
            <div
              className={
                isOpen[index] ? "questions-answer open" : "questions-answer"
              }
            >
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
