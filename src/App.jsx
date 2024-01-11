import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto w-full pb-[5000px]">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
