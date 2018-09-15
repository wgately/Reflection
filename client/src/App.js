import React, { Component } from "react";
import "./App.css";
import UserInputContainer from "./UserPage/UserInputContainer";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <h1 className="App-title">Click something below</h1>
        </header>
        <UserInputContainer />
      </div>
    );
  }
}

export default App;
