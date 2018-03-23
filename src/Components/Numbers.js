import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import CalculatorButton from "./CalculatorButton";

const calculatorButton = {
  margin: "10px 0",
  height: "80px",
  minWidth: "90px",
  fontSize: "65px"
};

const numberColumn = {
  width: "86px",
  height: "400px",
  marginTop: "20px",
  marginBottom: "38px",
  float: "left",
  margin: "0 5px"
};

const Numbers = () => {
  return (
    <div>
      <div style={numberColumn}>
        <CalculatorButton displayValue={7} />
        <CalculatorButton displayValue={4} />
        <CalculatorButton displayValue={1} />
        <CalculatorButton displayValue={0} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton displayValue={8} />
        <CalculatorButton displayValue={5} />
        <CalculatorButton displayValue={2} />
        <CalculatorButton displayValue={"."} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton displayValue={9} />
        <CalculatorButton displayValue={6} />
        <CalculatorButton displayValue={3} />
        <CalculatorButton displayValue={"="} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton displayValue={"/"} />
        <CalculatorButton displayValue={"x"} />
        <CalculatorButton displayValue={"-"} />
        <CalculatorButton displayValue={"+"} />
      </div>
    </div>
  );
};

export default Numbers;
