import React from "react";
import "./Input.css";

export const Output = props => (
  <div className="input">
    {props.output} <p>{props.value}</p>
  </div>
);
