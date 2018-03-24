import React from "react";
import CalculatorButton from "./CalculatorButton";

const numberColumn = {
  width: "86px",
  height: "400px",
  marginTop: "20px",
  marginBottom: "38px",
  float: "left",
  margin: "0 5px"
};

const Numbers = props => {
  return (
    <div>
      <div style={numberColumn}>
        <CalculatorButton testClick={props.testClick} displayValue={7} />
        <CalculatorButton testClick={props.testClick} displayValue={4} />
        <CalculatorButton testClick={props.testClick} displayValue={1} />
        <CalculatorButton testClick={props.testClick} displayValue={0} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton testClick={props.testClick} displayValue={8} />
        <CalculatorButton testClick={props.testClick} displayValue={5} />
        <CalculatorButton testClick={props.testClick} displayValue={2} />
        <CalculatorButton testClick={props.testClick} displayValue={"."} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton testClick={props.testClick} displayValue={9} />
        <CalculatorButton testClick={props.testClick} displayValue={6} />
        <CalculatorButton testClick={props.testClick} displayValue={3} />
        <CalculatorButton testClick={props.testClick} displayValue={"="} />
      </div>
      <div style={numberColumn}>
        <CalculatorButton testClick={props.testClick} displayValue={"/"} />
        <CalculatorButton testClick={props.testClick} displayValue={"x"} />
        <CalculatorButton testClick={props.testClick} displayValue={"-"} />
        <CalculatorButton testClick={props.testClick} displayValue={"+"} />
      </div>
    </div>
  );
};

export default Numbers;
