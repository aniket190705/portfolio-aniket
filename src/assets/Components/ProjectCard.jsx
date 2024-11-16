import React from "react";
import styled from "styled-components";

const Card = ({ heading1, heading2, desc, cardName, color }) => {
  return (
    <StyledWrapper>
      <div className={`card ${cardName}`}>
        <div className="textBox">
          <div className="text head">
            <h1 style={{ fontSize: "30px" }}>
              <span style={{ color: color }}>{heading1}</span>
            </h1>
            <h1 style={{ fontSize: "30px" }}>
              <span className="heading2">{heading2}</span>
            </h1>
          </div>
          <p className="text price">{desc}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card1 {
    width: 285px;
    height: 400px;
    background-image: url("src/assets/images/pro1.png");
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
  .card2 {
    width: 285px;
    height: 400px;
    background-image: url("src/assets/images/pro2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
  .card3 {
    width: 285px;
    height: 400px;
    background-image: url("src/assets/images/pro3.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }

  .textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    z-index: 2;
    transition: opacity 0.2s ease-in-out;
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 20px;
  
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .textBox > .price {
    font-size: 17px;
    text-align: center;
    padding: 7px;
  }

  .card:hover .textBox {
    opacity: 1;
  }

  .card:hover {
    transform: scale(1.04);
  }

  .card1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(315deg, #ffbc00, #ff0058),
      url("src/assets/images/pro1.png");
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: 1;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .card2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(315deg, #03a9f4, #ff0058);
      url("src/assets/images/pro1.png");
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: 1;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  
}


    .card3::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(315deg, #4dff03, #00d0ff);
      url("src/assets/images/pro1.png");
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: 1;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .card:hover::before {
    opacity: 0.8;
  }
  .heading2{
    color: #08d765;
    }
`;

export default Card;
