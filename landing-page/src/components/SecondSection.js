import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="section-container">
      <img
        src="/images/alt-landing-03.jpg"
        alt="logo"
        className="section-image"
      />
      <div className="section-card-text">
        <h2>The Units</h2>
        <h1>Seamless Lifestyle</h1>
        <p>
          Built to create a holistic growth in you with access to facilities and
          amenities at easy reach.
        </p>
        <div className="section-btn">
          <Button
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            VIEW UNITS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
