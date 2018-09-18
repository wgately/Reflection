import React from "react";
import "../App.css";
import "../Components/ChatBubbles/ChatBubbles.css";
import QuestionBubble from "../Components/ChatBubbles/QuestionBubble";
import { getQuestions, postAnswers } from "../service";

class UserInputContainer extends React.Component {
  state = {
    Learned: "",
    Read: "",
    Challenge: "",
    Overcome: "",
    Meet: "",
    Goal: "",
    Video: "",
    Travel: "",
    answersInitial: {
      Learned: "",
      Read: "",
      Challenge: "",
      Overcome: "",
      Meet: "",
      Goal: "",
      Video: "",
      Travel: ""
    },
    inputEntered: false,
    answers: {},
    questions: []
  };

  onClick() {
    console.log("clicked");
  }

  oddQuestionCount() {
    if (this.state.questions && this.state.questions.length % 2 === 1) {
      let lastQuestionIndex = this.state.questions.length - 1;
      let lastQuestion = this.state.questions[lastQuestionIndex];
      this.setState({ lastQuestion });
    }
  }

  setAnswers = () => {
    this.setState({
      answers: {
        Learned: this.state.Learned,
        Read: this.state.Read,
        Challenge: this.state.Challenge,
        Overcome: this.state.Overcome,
        Meet: this.state.Meet,
        Goal: this.state.Goal,
        Video: this.state.Video,
        Travel: this.state.Travel
      }
    });
  };

  applyAnswers = (name, val) => {
    let questions = [...this.state.questions];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].name === name) {
        questions[i].answer = val;
      }
    }
    this.setState({ questions });
  };

  onBlur = () => {
    this.applyAnswers();
    this.setAnswers();
  };

  onChange = e => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState(
      {
        [name]: val,
        inputEntered: true
      },
      this.applyAnswers(name, val)
    );
  };

  onSubmit = () => {
    this.setAnswers();
    let answers = this.state.answers;
    postAnswers(answers)
      .then(res => {
        console.log(res);
        this.setState({ inputEntered: false });
      })
      .catch(res => console.log("error"));
  };

  onCancel = () => {
    this.setState({ inputEntered: false });
  };

  componentDidMount() {
    getQuestions()
      .then(res => {
        this.setState({ questions: res });
        console.log(res);
        this.oddQuestionCount();
      })
      .catch(err => console.log("error"));
  }

  render() {
    return (
      <div className="container-fluid user-input-container">
        <div className="offset-lg-2 col-lg-8 col-md-12">
          <div className="box3 sb13">Choose a question for me</div>
          <div className="row">
            {this.state.questions
              ? this.state.questions.map(prompt => (
                  <div className="col-md-6">
                    <QuestionBubble
                      key={prompt.id}
                      name={prompt.name}
                      question={prompt.question}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                      setAnswers={this.setAnswers}
                    />
                  </div>
                ))
              : null}
            {this.state.questions && this.state.lastQuestion ? (
              <div className="d-flex row">
                <QuestionBubble
                  key={this.state.lastQuestion.id}
                  name={this.state.lastQuestion.name}
                  question={this.state.lastQuestion.question}
                  onClick={this.onClick}
                />
              </div>
            ) : null}
          </div>
          {this.state.inputEntered ? (
            <div>
              <button className="btn btn-primary" onClick={this.onSubmit}>
                Submit
              </button>
              <button className="btn btn-danger" onClick={this.onCancel}>
                Cancel
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default UserInputContainer;
