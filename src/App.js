import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctGuesses: 0,
      incorrectGuesses: 0,
      randomNumber: Math.floor(Math.random() * 100 + 1)
    };
  }
  randomizeNumber = () => {
    if (this.state.incorrectGuesses === 10) {
      this.setState({ gameOver: true });
    }
    this.setState({
      randomNumber: Math.floor(Math.random() * 100 + 1)
    });
  };
  higher = e => {
    e.preventDefault();
    let { correctGuesses, randomNumber, incorrectGuesses } = this.state;
    let number = Math.floor(Math.random() * 100 + 1);
    let right = (correctGuesses += 1);
    let wrong = (incorrectGuesses += 1);
    number > randomNumber
      ? this.setState({ correctGuesses: right }, () => this.randomizeNumber())
      : this.setState({ incorrectGuesses: wrong }, () =>
          this.randomizeNumber()
        );
  };
  lower = e => {
    e.preventDefault();
    let { correctGuesses, randomNumber, incorrectGuesses } = this.state;
    let number = Math.floor(Math.random() * 100 + 1);
    let right = (correctGuesses += 1);
    let wrong = (incorrectGuesses += 1);
    number < randomNumber
      ? this.setState({ correctGuesses: right }, () => this.randomizeNumber())
      : this.setState({ incorrectGuesses: wrong }, () =>
          this.randomizeNumber()
        );
  };
  reset = () => {
    this.setState({
      correctGuesses: 0,
      incorrectGuesses: 0,
      randomNumber: Math.floor(Math.random() * 100 + 1),
      gameOver: false
    });
  };
  render() {
    let {
      randomNumber,
      gameOver,
      correctGuesses,
      incorrectGuesses
    } = this.state;
    return (
      <div className="flexContainer">
        <div className="card">
          <div className="fist">
            <h1>Higher Lower</h1>
          </div>
          <div className="fist">
            {!gameOver ? (
              <h1>{randomNumber}</h1>
            ) : (
              <span>
                <h4>Correct Guesses: {correctGuesses}</h4>
                <h4>Incorrect Guesses: {incorrectGuesses}</h4>
                <button className="btn-success" onClick={this.reset}>
                  Reset
                </button>
              </span>
            )}
          </div>
          <div className="second">
            <button
              hidden={gameOver}
              onClick={this.higher}
              className="btn-lg btn-info"
            >
              Higher
            </button>
            <button
              hidden={gameOver}
              onClick={this.lower}
              className="btn-lg btn-danger"
            >
              Lower
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
