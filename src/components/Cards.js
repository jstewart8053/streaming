import React from "react";
// import "../App.css";

function Cards() {
  return (
    <div className="container">
      <div id="main">
        <div class="cardHolder" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="placeholder" />
          <div class="cardHolder-body">
            <h5 class="cardHolder-title">Card title</h5>
            <p class="cardHolder-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
