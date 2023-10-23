import React from "react";
import "../App.css";

function Searchbar() {
  return (
    <div className="searchContainer">
      <div className="searchbar">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}
export default Searchbar;
