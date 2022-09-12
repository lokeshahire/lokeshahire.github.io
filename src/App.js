import "./App.css";
import Aboutme from "./components/Aboutme";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Aboutme />
    </div>
  );
}

export default App;
