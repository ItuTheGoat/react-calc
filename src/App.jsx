import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { Output } from "./components/output";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      operator: "",
      firstVal: "",
      output: ""
    };
  }

  // This function appends to input everytime it's added.
  addToInput = value => {
    if (this.state.input === "0" && value !== ".") {
      this.setState({ input: value });
    } else if (this.state.input !== 0) {
      if (value !== ".") {
        this.setState({ input: this.state.input + value });
      } else {
        if (!this.state.input.includes(".")) {
          this.setState({ input: this.state.input + value });
        }
      }
    }
  };
  // This function will be used to show the previous inputed value
  outputCalc = value => {
    if (this.state.output === "") {
      this.setState({
        output: this.state.input + " " + value,
        input: "0",
        operator: value,
        firstVal: this.state.input
      });
    } else if (this.state.output !== "") {
      var prevOp = this.state.operator;
      var result = 0;

      // This is in order to string multiple operations together.
      switch (prevOp) {
        case "X":
          result = this.state.firstVal * this.state.input;
          this.setState({ output: result + " " + value });
          break;
        case "/":
          result = this.state.firstVal / this.state.input;
          this.setState({ output: result + " " + value });
          break;
        case "+":
          result = +this.state.firstVal + +this.state.input;
          this.setState({ output: result + " " + value });
          break;
        case "-":
          result = this.state.firstVal - this.state.input;
          this.setState({ output: result + " " + value });
          break;
      }
      this.setState({ input: "0", firstVal: result, operator: value });
    }
  };

  doCalculation = () => {
    var operator = this.state.operator;
    var result = 0;

    // This is for the equals calculation.
    switch (operator) {
      case "X":
        result = this.state.firstVal * this.state.input;
        this.setState({ output: result });
        break;
      case "/":
        result = this.state.firstVal / this.state.input;
        this.setState({ output: result });
        break;
      case "+":
        result = +this.state.firstVal + +this.state.input;
        this.setState({ output: result });
        break;
      case "-":
        result = this.state.firstVal - this.state.input;
        this.setState({ output: result });
        break;
    }
    this.setState({ input: "0", firstVal: "0", operator: "" });
  };

  backspace = () => {
    var userInput = this.state.input;
    console.log(userInput.length);
    if (userInput.length > 1) {
      var backspaced = userInput.substring(0, userInput.length - 1);
      console.log(backspaced);
      this.setState({ input: backspaced });
    } else if (userInput >= 1) {
      this.setState({ input: "0" });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Output output={this.state.output} />
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton
              handleClear={() =>
                this.setState({
                  input: "0",
                  operator: "",
                  firstVal: "",
                  output: ""
                })
              }
            >
              C
            </ClearButton>
            <ClearButton handleClear={() => this.setState({ input: "0" })}>
              CE
            </ClearButton>
            <ClearButton handleClear={() => this.backspace()}>←</ClearButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.outputCalc}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.outputCalc}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.outputCalc}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.doCalculation()}>=</Button>
            <Button handleClick={this.outputCalc}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
