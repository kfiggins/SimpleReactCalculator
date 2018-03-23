import React from "react";
import Display from "./Display";
import Input from "./Input";

const calculatorDesign = {
  width: "400px",
  height: "560px",
  border: "4px solid black",
  margin: "auto",
  borderRadius: "8px"
};

const Calculator = () => {
  return (
    <div>
      <div style={calculatorDesign}>
        <Display />
        <Input />
      </div>
    </div>
  );
};

export default Calculator;
