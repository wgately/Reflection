import React from "react";
import "../App.css";
import "../Components/ChatBubbles/ChatBubbles.css";

class UserInputContainer extends React.Component {
  state = {
    learned: ""
  };

  onClick() {
    console.log("clicked");
  }
  render() {
    return (
      <div className="container-fluid user-input-container">
        <div className="box3 sb13">Choose a question for me</div>
        <div className="d-flex row">
          <div className="box3 sb14" name="learned" onClick={this.onClick}>
            Tell me something you learned today
          </div>
          <div className="box3 sb14">Tell me about a book you want to read</div>
        </div>
        <div className="d-flex row">
          <div className="box3 sb14">Tell me about a person you met</div>
          <div className="box3 sb14">Tell me about a challenge you faced</div>
        </div>
        <div className="d-flex row">
          <div className="box3 sb14">Tell me about a victory you've achieved</div>
          <div className="box3 sb14">Tell me about a place you'd like to go</div>
        </div>
        <div className="d-flex row">
          <div className="box3 sb14">Tell me about a new goal</div>
          <div className="box3 sb14">Tell me about a video you wanted to watch</div>
        </div>
        <textarea className="text-box box3 sb14" placeholder="Tell me something you have learned" />
      </div>
    );
  }
}

export default UserInputContainer;
