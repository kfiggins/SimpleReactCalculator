import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const calculatorDisplay = {
  width: "350px",
  height: "500px",
  borderRadius: "8px",
  marginLeft: "15px",
  float: "left"
};

const ExtraFunctions = props => {
  return (
    <div style={calculatorDisplay}>
      <h2>Extra Functions</h2>
      <RaisedButton onClick={props.clear.bind(this)} primary={true}>
        Clear
      </RaisedButton>
      <br />
      <DropDownMenu value={props.decmialPlaces} onChange={props.handleChanges}>
        <MenuItem value={0} primaryText="0 Decimal Points" />
        <MenuItem value={1} primaryText="1 Decimal Points" />
        <MenuItem value={2} primaryText="2 Decimal Points" />
        <MenuItem value={3} primaryText="3 Decimal Points" />
        <MenuItem value={4} primaryText="4 Decimal Points" />
        <MenuItem value={5} primaryText="5 Decimal Points" />
      </DropDownMenu>
    </div>
  );
};

export default ExtraFunctions;
