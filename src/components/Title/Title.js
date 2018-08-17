import React from "react";
import "./Title.css";

const Title = props => (
  <div className="jumbotron">
    <div className="title-container">
    <h1 className="title">{props.children}</h1>
    <hr />
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
  </div>
);

export default Title;