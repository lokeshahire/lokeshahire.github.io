import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Whatido from "./components/Whatido";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Aboutme />
      <Whatido />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
