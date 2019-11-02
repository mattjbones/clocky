import React from 'react';
import Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock targetAngle={{hour: 340, minutes: 100}}/>
        <Clock targetAngle={{hour: 90, minutes: 160}}/>
        <Clock targetAngle={{hour: 240, minutes: 80}}/>
        <Clock targetAngle={{hour: 40, minutes: 9}}/>
      </header>
    </div>
  );
}

export default App;
