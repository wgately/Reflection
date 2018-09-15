import React from "react";
import logo from "./logo.svg";

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleDateString(),
    time: " "
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    this.setDate();
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  setDate() {
    let todayDate = new Date().toLocaleDateString();
    let date = todayDate.split("/");
    let day = date[0] + "/" + date[1];
    this.setState({
      date: day
    });
  }

  tick() {
    let currentTime = new Date().toLocaleString().split(" ");
    let newTime = currentTime[1] + " " + currentTime[2];
    this.setState({
      time: newTime
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="text-left">{this.state.date}</h1>
          <img src={logo} className="App-logo-1" style={{ position: "relative", right: "28px" }} alt="logo" />
          <img src={logo} className="App-logo-2" style={{ position: "relative", right: "85px" }} alt="logo" />
        </div>
        <h1 className="justify-content-center">Reflection</h1>
        <div>
          <h1 className="App-clock">{this.state.time}</h1>
          <img src={logo} className="App-logo-3" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Clock;
