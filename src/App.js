import React, { Component } from 'react';
import './App.css';
import History from './components/History';
import Display from './components/Display';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="screen">
            <History history="calculation history" />
            <Display displayValue="0" />
          </div>
          <div className="calculator-keys">
            <div className="main-keys">
              <div className="special-keys">
                <Button id="clear">AC</Button>
                <Button>±</Button>
                <Button id="divide">÷</Button>
              </div>
              <div className="num-keys">
                <Button id="nine">9</Button>
                <Button id="eight">8</Button>
                <Button id="seven">7</Button>
                <Button id="six">6</Button>
                <Button id="five">5</Button>
                <Button id="four">4</Button>
                <Button id="three">3</Button>
                <Button id="two">2</Button>
                <Button id="one">1</Button>
                <Button id="zero">0</Button>
                <Button id="decimal">.</Button>
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
