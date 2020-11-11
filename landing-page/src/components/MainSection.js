import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container">
      <img
        src="/images/alt-landing-02.jpg"
        alt="logo bit"
        className="main-image"
      />
      <div className="card-text">
        <h2>About Us</h2>
        <h1>Strategically Located</h1>
        <p>
          The Glenz is located just 50m away from the upcoming Persiaran Kerjaya
          LRT3 Station, making it the first transit oriented development in
          Glenmarie, Shah Alam.
        </p>
        <div className="main-btn">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            VIEW LOCATION
          </Button>
        </div>
      </div>
      {/* 
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          VIEW OVERVIEW
        </Button>
      </div> */}
    </div>
  );
}

export default MainSection;
