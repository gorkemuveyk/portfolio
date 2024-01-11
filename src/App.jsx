import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
