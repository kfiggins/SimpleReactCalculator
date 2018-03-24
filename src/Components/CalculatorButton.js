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
      <RaisedButton
        onClick={props.testClick.bind(this, props.displayValue)}
        style={calculatorButton}
        label=" "
      >
        {props.displayValue}
      </RaisedButton>
    </div>
  );
};

export default CalculatorButton;
