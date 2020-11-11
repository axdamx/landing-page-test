import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards({ data }) {
  return (
    <div className="cards">
      <h3> Why Us? </h3>
      <h1>A Perfect Investment & Upgrade</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data.map((item, key) => {
              return (
                <CardItem
                  key={key}
                  src={item.image}
                  text={item.category_name}
                  description={item.description}
                />
              );
            })}
            {/* <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
