import React, { Component } from 'react';
import './App.css';
import History from './components/History';
import Display from './components/Display';
import Button from './components/Button/Button';
import ClearButton from './components/Button/ClearButton';
import ToggleButton from './components/Button/ToggleButton';
import DecimalButton from './components/Button/DecimalButton';
import OperationButton from './components/Button/OperationButton';
import EqualButton from './components/Button/EqualButton';

class App extends Component {
  state = {
    displayValue: '0',
    history: '',
    prevValue: null,
    currentOperator: null,
    toOperation: false,
    pressedEquals: false
  };

  handleClearAll = () => {
    this.setState({
      displayValue: '0',
      history: '',
      currentOperator: null,
      toOperation: false,
      prevValue: null,
      pressedEquals: false
    });
  };

  handleToggleSign = () => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(parseFloat(displayValue) * -1)
    });
  };

  handleInputDigit = digit => {
    const { displayValue, toOperation, pressedEquals } = this.state;

    if (toOperation) {
      this.setState({
        displayValue: digit,
        toOperation: false,
        pressedEquals: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' || pressedEquals ? digit : displayValue + digit,
        pressedEquals: false
      });
    }
  };

  handleInputDecimal = () => {
    const { displayValue, pressedEquals, toOperation } = this.state;

    if (pressedEquals) {
      this.setState({
        displayValue: '0.',
        pressedEquals: false,
        prevValue: null
      });
    } else if (toOperation) {
      this.setState({
        displayValue: '0.',
        toOperation: false
      });
    } else if (!displayValue.includes('.')) {
      this.setState({
        displayValue: displayValue + '.'
      });
    }
  };

  calculate(prevValue, currentValue, operation) {
    switch (operation) {
      case '÷':
        return prevValue / currentValue;
      case '×':
        return prevValue * currentValue;
      case '-':
        return prevValue - currentValue;
      case '+':
        return prevValue + currentValue;
      default:
        return 0;
    }
  }

  handleOperation = nextOperator => {
    const {
      prevValue,
      displayValue,
      currentOperator,
      history,
      toOperation,
      pressedEquals
    } = this.state;
    const currentValue = parseFloat(displayValue);

    if (toOperation) {
      this.setState({
        currentOperator: nextOperator,
        history: history.replace(/.$/, nextOperator)
      });
    } else {
      const endsWithDot = /\.$/.test(displayValue);
      const newDisplayValue = endsWithDot
        ? displayValue.replace(/\./, '')
        : displayValue;

      this.setState({
        currentOperator: nextOperator,
        toOperation: true,
        history: `${history} ${newDisplayValue} ${nextOperator}`,
        pressedEquals: false
      });

      if (prevValue === null) {
        this.setState({
          prevValue: currentValue
        });
      } else if (pressedEquals) {
        this.setState({
          prevValue: currentValue
        });
      } else if (currentOperator) {
        const newValue = this.calculate(
          prevValue,
          currentValue,
          currentOperator
        );
        this.setState({
          prevValue: newValue,
          displayValue: String(newValue)
        });
      }
    }
  };

  handleEquals = () => {
    const {
      prevValue,
      displayValue,
      currentOperator,
      pressedEquals
    } = this.state;

    if (!currentOperator || pressedEquals) {
      this.setState({
        pressedEquals: true,
        toOperation: false
      });
    } else {
      const newValue = this.calculate(
        prevValue,
        parseFloat(displayValue),
        currentOperator
      );
      this.setState({
        pressedEquals: true,
        history: '',
        prevValue: newValue,
        displayValue: String(newValue),
        toOperation: false
      });
    }
  };

  render() {
    const { displayValue, history } = this.state;

    return (
      <div className="App">
        <div className="calculator">
          <div className="screen">
            <History history={history} />
            <Display displayValue={displayValue} />
          </div>
          <div className="calculator-keys">
            <div className="main-keys">
              <div className="special-keys">
                <ClearButton id="clear" onClear={this.handleClearAll}>
                  AC
                </ClearButton>
                <ToggleButton onToggleSign={this.handleToggleSign}>
                  ±
                </ToggleButton>
                <OperationButton id="divide" onOperation={this.handleOperation}>
                  ÷
                </OperationButton>
              </div>
              <div className="num-keys">
                <Button id="nine" onInputDigit={this.handleInputDigit}>
                  9
                </Button>
                <Button id="eight" onInputDigit={this.handleInputDigit}>
                  8
                </Button>
                <Button id="seven" onInputDigit={this.handleInputDigit}>
                  7
                </Button>
                <Button id="six" onInputDigit={this.handleInputDigit}>
                  6
                </Button>
                <Button id="five" onInputDigit={this.handleInputDigit}>
                  5
                </Button>
                <Button id="four" onInputDigit={this.handleInputDigit}>
                  4
                </Button>
                <Button id="three" onInputDigit={this.handleInputDigit}>
                  3
                </Button>
                <Button id="two" onInputDigit={this.handleInputDigit}>
                  2
                </Button>
                <Button id="one" onInputDigit={this.handleInputDigit}>
                  1
                </Button>
                <DecimalButton
                  id="decimal"
                  onInputDecimal={this.handleInputDecimal}
                >
                  .
                </DecimalButton>
                <Button id="zero" onInputDigit={this.handleInputDigit}>
                  0
                </Button>
              </div>
            </div>
            <div className="operation-keys">
              <OperationButton id="multiply" onOperation={this.handleOperation}>
                ×
              </OperationButton>
              <OperationButton id="subtract" onOperation={this.handleOperation}>
                -
              </OperationButton>
              <OperationButton id="add" onOperation={this.handleOperation}>
                +
              </OperationButton>
              <EqualButton id="equals" onEquals={this.handleEquals}>
                =
              </EqualButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
