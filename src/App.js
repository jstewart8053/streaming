import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Directions from "./components/Directions";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("Matrix");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const response = await fetchData();
    setResults(response.result);
    console.log("results", results);
  };

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/title",
      params: {
        title: query,
        country: "us",
        show_type: "all",
        output_language: "en",
      },

      headers: {
        "X-RapidAPI-Key": "d72a7fd318msha82e97ad3e6671dp1e4dd0jsna89c7cd4e107",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <Hero />
        <Directions />
        <div className="searchContainer">
          <div className="searchbar">
            <form onSubmit={getSearch} className="search-form">
              <input
                className="searchBar"
                type="text"
                value={search}
                onChange={updateSearch}
              />

              <button className="search-button" type="submit">
                Search
              </button>
              <button
                className="clear-button"
                type="button"
                onClick={clearSearch}
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        {results && results.length > 0 ? (
          results.map((result, index) => <Cards key={index} {...result} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}

export default App;
