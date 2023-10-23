import "./App.css";
import Directions from "./components/Directions";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Hero />
      <Directions />
      <Searchbar />
    </div>
  );
}

export default App;
