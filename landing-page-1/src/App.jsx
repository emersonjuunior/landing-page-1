import "./App.css";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Particles id="particles" />
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Questions />
    </>
  );
}

export default App;
