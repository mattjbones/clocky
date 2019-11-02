import React from 'react';
import DigitalClock from './components/DigitalClock';
import NumberGrid from './components/NumberGrid';
import StopWatch from './components/StopWatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StopWatch /> */}
        {/* <NumberGrid /> */}
        <DigitalClock />
      </header>
    </div>
  );
}

export default App;
