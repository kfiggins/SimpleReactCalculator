import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const calculatorButton = {
  margin: "10px 0",
  height: "80px",
  minWidth: "90px",
  fontSize: "65px"
};

const CalculatorButton = props => {
  return (
    <div>
      <RaisedButton style={calculatorButton}>{props.displayValue}</RaisedButton>
    </div>
  );
};

export default CalculatorButton;
