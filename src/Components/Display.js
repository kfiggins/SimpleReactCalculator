import React from "react";

const calculatorDisplay = {
  width: "350px",
  height: "120px",
  border: "4px solid black",
  margin: "auto",
  borderRadius: "8px",
  marginTop: "15px"
};

const Display = () => {
  return (
    <div>
      <div style={calculatorDisplay} />
    </div>
  );
};

export default Display;
