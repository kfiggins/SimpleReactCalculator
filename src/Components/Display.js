import React from "react";

const calculatorDisplay = {
  width: "350px",
  height: "120px",
  border: "4px solid black",
  margin: "auto",
  borderRadius: "8px",
  marginTop: "15px",
  fontSize: "50px",
  textAlign: "right"
};

const Display = props => {
  return (
    <div>
      <div style={calculatorDisplay}>{props.displayValue}</div>
    </div>
  );
};

export default Display;
