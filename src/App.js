import "./App.css";
import Aboutme from "./components/Aboutme";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Aboutme />
      <Skill />
    </div>
  );
}

export default App;
