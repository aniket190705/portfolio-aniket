import React from "react";
import star from "../icons/star.png";
import { useRef } from "react";
import "./SpotlightCard.css";

const Card = ({
  heading1,
  heading2,
  desc,
  className = "",
  spotlightColor = "rgba(107, 255, 97, 0.59)",
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    // divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      <div className="up">
        <img src={star} alt="" />
        <h2>
          {heading1}
          <span className="green-heading">{heading2}</span>
        </h2>
      </div>

      <br />
      <br />
      <p>{desc}</p>
      <button className="github-btn">Learn more</button>
    </div>
  );
};

export default Card;

// const Card = ({ heading1, heading2, desc, cardName, color }) => {
//   return (
//     <div className="wrapper">
//       <div className={`card ${cardName}`}>
//         <div className="textBox">
//           <div className="text head">
//             <h1 style={{ fontSize: "30px" }}>
//               <span style={{ color }}>{heading1}</span>
//             </h1>
//             <h1 style={{ fontSize: "30px" }}>
//               <span className="heading2">{heading2}</span>
//             </h1>
//           </div>
//           <p className="text price">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
