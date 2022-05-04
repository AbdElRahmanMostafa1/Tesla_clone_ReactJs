import React from "react";
import "./TeslaModel.css";
import Button from "./Button";

const TeslaModel = ({
  backgroundImage,
  modelName,
  order,
  link,
  btn1,
  btn2,
  icon,
}) => {
  return (
    <section
      className="tesla-model"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <article className="tesla-model-content">
        <div>
          <h1 style={{ textTransform: "capitalize" }}>{modelName}</h1>
          <p>
            {order}{" "}
            {link && (
              <a href="https://www.youtube.com/channel/UCc6fQzY20yl3kgN-ShpTTFg">
                {link}
              </a>
            )}
          </p>
        </div>
        <div className="bottom-content-container">
          <div className="btns-container">
            <Button> {btn1} </Button>
            {btn2 && (
              <Button style={{ backgroundColor: "#E8E8E7", color: "black" }}>
                {btn2}
              </Button>
            )}
          </div>
          <div className="arrow">
            {" "}
            <i className={`${icon}`}></i>{" "}
          </div>
        </div>
      </article>
    </section>
  );
};

export default TeslaModel;
