import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
