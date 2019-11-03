import React from 'react';
import DigitalClock from './components/DigitalClock';
import NumberGrid from './components/NumberGrid';
import StopWatch from './components/StopWatch';
import './App.css';

const TYPES = {
  StopWatch: 'stopwatch',
  NumberGrid: 'numbergrid',
  DigitalClock: 'digitalclock'
};

function parseUrlForType(){
  const { pathname } = document.location;
  const pathParts = pathname.split('/');
  return pathParts[pathParts.length -1].toLowerCase();
}

function App() {
  const type = parseUrlForType() || TYPES.DigitalClock;
  console.log({type});
  return (
    <div className="App">
      <header className="App-header">
        {_renderClockType(type)}
        {_renderNavigationMenu(type)}
      </header>
    </div>
  );
}

function _renderClockType(type) {
  switch(type){
    case TYPES.NumberGrid:
      return <NumberGrid />;
    case TYPES.StopWatch:
      return <StopWatch />;
    default:
    case TYPES.DigitalClock:
      return <DigitalClock />;
  }
}

function _renderNavigationMenu(activeType) {
  return <div className="App-navbar row">
    {
      Object.keys(TYPES).map(type=>
        _renderNavigationItem(TYPES[type], type, activeType)
      )
    }
  </div>
}

function _renderNavigationItem(path, label, activePath){
  const isActive = path === activePath; 
  return <a className={isActive ? "active" : ""} href={path}>{label}</a>
}

export default App;
