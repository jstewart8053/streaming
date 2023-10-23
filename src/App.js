import "./App.css";
import Directions from "./components/Directions";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <Directions />
        <Searchbar />
      </div>
      <div className="cardContainer">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
