import React from "react";
import personImg from "./../images/image (1).png";

const Card = () => {
  return (
    <div className="card">
      <img className="imgs" src={personImg} alt="Profile Picture"></img>
      <h4>Sandhya Dammalapati</h4>
      <p>
        specifically : discourse intended to give a mental image of something
        experienced beautiful beyond description gave an accurate description of
        what he saw
      </p>
    </div>
  );
};

export default Card;
