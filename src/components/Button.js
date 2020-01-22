import React from "react";
import "./Button.css";

const isOperator = value => {
  return !isNaN(value) || value === "." || value === "=";
};

// if The button is an operator, add the class 'operator'
export const Button = props => (
  <div
    className={`btn-wrapper ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
