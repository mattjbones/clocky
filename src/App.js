import React from 'react';
import ClockNumber, { NUMBERS } from './components/ClockNumber';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <ClockNumber number={NUMBERS.ZERO}/>
          <ClockNumber number={NUMBERS.ONE}/>
          <ClockNumber number={NUMBERS.TWO}/>
          <ClockNumber number={NUMBERS.THREE}/>
          <ClockNumber number={NUMBERS.FOUR}/>
        </div>
        <div className="row">
          <ClockNumber number={NUMBERS.FIVE}/>
          <ClockNumber number={NUMBERS.SIX}/>
          <ClockNumber number={NUMBERS.SEVEN}/>
          <ClockNumber number={NUMBERS.EIGHT}/>
          <ClockNumber number={NUMBERS.NINE}/>
        </div>
      </header>
    </div>
  );
}

export default App;
