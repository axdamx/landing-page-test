import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Glenmarie’s First Transit Oriented Development</h1>
        <p>
          The Glenz is an integrated development with convenience built to mind
          with amenities just steps away.
        </p>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VIEW OVERVIEW
        </Button>
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

export default HeroSection;
