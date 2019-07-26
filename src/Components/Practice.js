import React from "react";
import Quest from "./questions";
import Progress from "./Loader";

class App extends React.Component {
  state = {
    userGuess: null,
    currentQuestionId: 1,
    Options: [],
    Question: null,
    Answer: null,
    Score: 0,
    Loading: false,
    dis: false,
    color: ""
  };
  quiz = () => {
    const { currentQuestionId } = this.state;
    this.setState(() => {
      return {
        Question: Quest[currentQuestionId].Question,
        Options: Quest[currentQuestionId].Options,
        Answer: Quest[currentQuestionId].Correct
      };
    });
  };

  componentDidMount() {
    this.quiz();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.currentQuestionId !== prevState.currentQuestionId) {
      this.setState({ Loading: true });
      setTimeout(() => {
        this.setState({ Loading: false, color: "" }, () => this.quiz());
      }, 2000);
    }
  };
  NextQuestion = isCorrect => {
    const { currentQuestionId } = this.state;
    this.setState({
      currentQuestionId: currentQuestionId + 1,
      color: isCorrect ? "green" : "red"
    })
    if(isCorrect){
        this.setState({
            Score: this.state.Score +1
        })
    }
  };
  renderChoices = () => {
    const { Options, Answer } = this.state;
    const defaultStyles = {
      height: "100px",
      width: "125px",
      boxShadow: "5px 5px black",
      margin: '10px', 
      border: '5px double grey',
      color: 'black',
    };
    return Options.map((option, index) =>
      this.renderButton(
        option,
        {
          ...defaultStyles,
          backgroundColor: option === Answer ? this.state.color : null
        },
        index,
        option === Answer
      )
    );
  };

  renderButton = (choice, color, key, isCorrect) => {
    return (
      <button
        className="btn-answer"
        style={color}
        key={key}
        disabled={this.Loading}
        onClick={() => this.NextQuestion(isCorrect, choice)}
      >
        {choice}
        {this.state.Loading && <Progress />}
      </button>
    );
  };
  render() {
      const form = {
          border: '5px groove grey',
          textAlign: 'center',
          padding: '30px',
          alignItems: 'center',
          backgroundColor: 'skyblue'

      }
    const { Question, currentQuestionId } = this.state;
    return (
      <div style={form}>
        <span>
          This Question is {currentQuestionId} out of 10
        </span>
        <div>
          <h1>These are Random Questions </h1>
        </div>
        {Question}
        <br />
        <ul>{this.renderChoices()}</ul>
        <div>Your Score is {this.state.Score}/10</div>
        {currentQuestionId === Quest.length - 1 && <button>Finish Quiz</button>}
      </div>
    );
  }
}

export default App;
