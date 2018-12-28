import React, { Component } from 'react';
import './App.css';
import History from './components/History';
import Display from './components/Display';
import Button from './components/Button/Button';
import ClearButton from './components/Button/ClearButton';
import ToggleButton from './components/Button/ToggleButton';
import DecimalButton from './components/Button/DecimalButton';

class App extends Component {
  state = {
    displayValue: '0',
    history: ''
  };

  handleClearAll = () => {
    this.setState({
      displayValue: '0',
      history: ''
    });
  };

  handleToggleSign = () => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(parseFloat(displayValue) * -1)
    });
  };

  handleInputDigit = digit => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === '0' ? digit : displayValue + digit
    });
  };

  handleInputDecimal = () => {
    const { displayValue } = this.state;

    if (!displayValue.includes('.')) {
      this.setState({ displayValue: displayValue + '.' });
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
                <Button id="divide">÷</Button>
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
              <Button id="multiply">×</Button>
              <Button id="subtract">-</Button>
              <Button id="add">+</Button>
              <Button id="equals">=</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
