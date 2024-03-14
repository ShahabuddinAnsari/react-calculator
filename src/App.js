import React from "react";
import Keypads from "./component/Keypads";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      input: [],
      lastInput: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  inputHandler(event) {
    const currentInput = event.target.value;
    let input = this.state.input;
    input.push(currentInput);
    this.setState({ input, lastInput: currentInput });
  }

  resetHandler() {
    this.setState({ result: "", input: [] });
  }

  clearInput() {
    const currentInput = this.state.input;
    if (currentInput.length) {
      currentInput.pop();
    }
    this.setState({ input: currentInput });
  }

  calculateResult() {
    let result;
    try {
      result = eval(this.state.input.join(""));
    } catch (error) {
      result = "Error";
    }

    this.setState({ result, input: [] });
  }

  getResult() {
    if (!this.state.result) return 0;

    return parseFloat(this.state.result).toFixed(2);
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="currentInput">
            {this.state.input ? this.state.input : ""}
          </div>
          <div className="result">{this.getResult()}</div>
          <Keypads
            inputHandler={this.inputHandler}
            reset={this.resetHandler}
            clearInput={this.clearInput}
            clearBtnEnabled={!!this.state.input.length}
            calculateResult={this.calculateResult}
          />
        </div>
      </div>
    );
  }
}

export default App;
