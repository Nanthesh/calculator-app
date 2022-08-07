import React from "react";
import "./App.css";

function App() {
  const numberReg = new RegExp("^[0-9]+$");

  const [input, setInput] = React.useState({
    firstNumber: "",
    secondNumber: "",
    operator: "",
  });

  const handleButtonClick = (event) => {
    const { target } = event;
    if (target && target.id) {
      if (numberReg.test(target.id) || target.id === ".") {
        if (!input.operator) {
          setInput((prevVal) => {
            let value = { ...prevVal };
            value.firstNumber = value.firstNumber + target.id;
            return value;
          });
        } else if (input.operator) {
          setInput((prevVal) => {
            let value = { ...prevVal };
            value.secondNumber = value.secondNumber + target.id;
            return value;
          });
        }
      } else if (target.id === "c") {
        resetCalculator();
      } else if (target.id === "=") {
        getResult();
      } else {
        if (input.firstNumber && input.operator === "") {
          setInput((prevVal) => {
            let value = { ...prevVal };
            value.operator = target.id;
            return value;
          });
        }
      }
    }
  };

  const resetCalculator = () => {
    setInput((prevVal) => {
      let value = { ...prevVal };
      value.firstNumber = "";
      value.secondNumber = "";
      value.operator = "";
      return value;
    });
  };

  const getResult = () => {
    let result = "";
    switch (input.operator) {
      case "+":
        result = Number(input.firstNumber) + Number(input.secondNumber);
        break;
      case "-":
        result = +input.firstNumber - +input.secondNumber;
        break;
      case "*":
        result = +input.firstNumber * +input.secondNumber;
        break;
      case "/":
        result = +input.firstNumber / +input.secondNumber;
        break;
      default:
        return;
    }
    setInput((prevVal) => {
      let value = { ...prevVal };
      value.firstNumber = result;
      value.secondNumber = "";
      value.operator = "";
      return value;
    });
  };

  return (
    <div className="calculator-container">
      <div className="input-box">
        {`${input.firstNumber} ${input.operator} ${input.secondNumber}`}
      </div>
      <div className="calculator-button-container" onClick={handleButtonClick}>
        <div className="calculator-row">
          <button id="1" className="calculator-keys">
            1
          </button>
          <button id="2" className="calculator-keys">
            2
          </button>
          <button id="3" className="calculator-keys">
            3
          </button>
          <button id="+" className="calculator-keys">
            +
          </button>
        </div>
        <div className="calculator-row">
          <button id="4" className="calculator-keys">
            4
          </button>
          <button id="5" className="calculator-keys">
            5
          </button>
          <button id="6" className="calculator-keys">
            6
          </button>
          <button id="-" className="calculator-keys">
            -
          </button>
        </div>
        <div className="calculator-row">
          <button id="7" className="calculator-keys">
            7
          </button>
          <button id="8" className="calculator-keys">
            8
          </button>
          <button id="9" className="calculator-keys">
            9
          </button>
          <button id="*" className="calculator-keys">
            *
          </button>
        </div>
        <div className="calculator-row">
          <button id="c" className="calculator-keys">
            c
          </button>
          <button id="0" className="calculator-keys">
            0
          </button>
          <button id="." className="calculator-keys">
            .
          </button>
          <button id="/" className="calculator-keys">
            /
          </button>
        </div>
        <div className="calculator-row last">
          <button id="=" className="calculator-keys">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
