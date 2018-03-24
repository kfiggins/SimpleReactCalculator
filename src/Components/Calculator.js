import React from "react";
import Display from "./Display";
import Input from "./Input";
import ExtraFunctions from "./ExtraFunctions";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousValue: "",
      currentValue: "",
      currentOperator: "",
      decmialPlaces: 2
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearCalculator = this.clearCalculator.bind(this);
    this.handleDecimalChange = this.handleDecimalChange.bind(this);
  }

  clearCalculator() {
    this.setState({
      previousValue: "",
      currentValue: "",
      currentOperator: ""
    });
  }

  handleClick(value) {
    this.computeValue(value);
  }

  handleDecimalChange = (event, index, value) =>
    this.setState({ decmialPlaces: value });

  computeValue(value) {
    var reg = new RegExp("^[0-9.]$");
    // Set current value for numbers
    if (reg.test(value)) {
      this.setState({
        currentValue: this.state.currentValue.toString() + value.toString()
      });
      return;
    }

    if (value === "+" || value === "-" || value === "/" || value === "x") {
      let selectedOperator = value;
      if (this.state.currentValue > 0) {
        this.setState({
          currentOperator: selectedOperator,
          previousValue: this.state.currentValue,
          currentValue: ""
        });
      }
      return;
    }

    if (value === "=") {
      let curValue = parseFloat(this.state.currentValue);
      let prevValue = parseFloat(this.state.previousValue);

      if (this.state.currentOperator === "+") {
        this.setState({
          currentValue: (curValue + prevValue).toFixed(
            this.state.decmialPlaces
          ),
          currentOperator: ""
        });
      }

      if (this.state.currentOperator === "-") {
        this.setState({
          currentValue: (prevValue - curValue).toFixed(
            this.state.decmialPlaces
          ),
          currentOperator: ""
        });
      }

      if (this.state.currentOperator === "/") {
        this.setState({
          currentValue: (prevValue / curValue).toFixed(
            this.state.decmialPlaces
          ),
          currentOperator: ""
        });
      }

      if (this.state.currentOperator === "x") {
        this.setState({
          currentValue: (curValue * prevValue).toFixed(
            this.state.decmialPlaces
          ),
          currentOperator: ""
        });
      }
    }
  }

  render() {
    const calculatorDesign = {
      width: "400px",
      height: "560px",
      border: "4px solid black",
      margin: "auto",
      borderRadius: "8px"
    };

    return (
      <div>
        <ExtraFunctions
          clear={this.clearCalculator}
          decmialPlaces={this.state.decmialPlaces}
          handleChanges={this.handleDecimalChange}
        />
        <div style={calculatorDesign}>
          <Display displayValue={this.state.currentValue} />
          <Input testClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
