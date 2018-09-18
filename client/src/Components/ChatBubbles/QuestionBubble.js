import React from "react";
import "./ChatBubbles.css";
import "../../App.css";

class QuestionBubble extends React.Component {
  state = {
    editMode: false
  };

  editClick = () => {
    this.setState({ editMode: !this.state.editMode });
    console.log("clicked");
    this.props.setAnswers();
  };

  handleFocus = e => {
    e.target.select();
  };
  /*   onChange = e => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({ [name]: val });
  }; */

  render() {
    const { name, question, answer, onBlur } = this.props;
    return (
      <React.Fragment>
        {this.state.editMode ? (
          <input
            type="text"
            className="box3 sb14"
            name={name}
            onChange={e => this.props.onChange(e)}
            onBlur={onBlur}
            /*  onClick={this.editClick} */
          />
        ) : (
          <div className="box3 sb14" name={name} onClick={this.editClick}>
            {answer ? answer : question}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default QuestionBubble;
