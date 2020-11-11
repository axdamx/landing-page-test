import React from "react";
import { Button } from "./Button";

function CardItem({ src, text, description }) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="logo" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
            <h5 className="cards__item__text">{description}</h5>
          </div>
          <div className="card-btn">
            <Button
              className="btn"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              READ MORE >
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
