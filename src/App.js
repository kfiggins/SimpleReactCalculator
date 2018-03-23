import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Calculator from "./Components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Calculator</h1>
        </header>
        <p className="App-intro">Check out my Awesome Calculator below!</p>
        <MuiThemeProvider>
          <Calculator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
