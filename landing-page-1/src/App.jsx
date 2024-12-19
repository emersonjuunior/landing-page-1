import "./App.css";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";
import LastCTA from "./components/LastCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles id="particles" />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <Questions />
        <LastCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
