import React from "react";
import "./ProjectCard.css"; // Import the external CSS file

const Card = ({ heading1, heading2, desc, cardName, color }) => {
  return (
    <div className="wrapper">
      <div className={`card ${cardName}`}>
        <div className="textBox">
          <div className="text head">
            <h1 style={{ fontSize: "30px" }}>
              <span style={{ color }}>{heading1}</span>
            </h1>
            <h1 style={{ fontSize: "30px" }}>
              <span className="heading2">{heading2}</span>
            </h1>
          </div>
          <p className="text price">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
