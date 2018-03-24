import React from "react";
import Numbers from "./Numbers";

const numberBox = {
  width: "385px",
  height: "450px",
  borderRadius: "8px",
  marginTop: "8px",
  marginBottom: "8px",
  marginLeft: "6px",
  float: "left"
};

const Display = props => {
  return (
    <div>
      <div style={numberBox}>
        <Numbers testClick={props.testClick} />
      </div>
    </div>
  );
};

export default Display;
