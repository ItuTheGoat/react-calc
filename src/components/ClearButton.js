import React from "react";
import "./ClearButton.css";

export const ClearButton = props => (
  <div className="btn-clear" onClick={props.handleClear}>
    {props.children}
  </div>
);
