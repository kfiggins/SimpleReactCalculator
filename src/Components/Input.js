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

const Display = () => {
  return (
    <div>
      <div style={numberBox}>
        <Numbers />
      </div>
    </div>
  );
};

export default Display;
