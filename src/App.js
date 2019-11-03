import React, { useState, useEffect } from 'react';
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
  const { hash } = document.location;
  const hashparts = hash.split('#');
  return hashparts[hashparts.length -1].toLowerCase();
}

function App() {
  const [ type, setType ] = useState(TYPES.DigitalClock);

  useEffect(()=>{
    const updateType = () => {
      const type = parseUrlForType() || TYPES.DigitalClock;
      console.log({hash: document.location.hash});
      console.log({type})
      setType(type);
    }
    window.addEventListener('hashchange', updateType);
    updateType();
    return () => window.removeEventListener('hashchange', updateType);
  }, []);

  useEffect(()=>{
    document.title = `Clock ･ ${type}`;
  }, [type]);

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
  return <div className="App-navbar row" key={activeType}>
    {
      Object.keys(TYPES).map(type=>
        _renderNavigationItem(TYPES[type], type, activeType)
      )
    }
  </div>
}

function _renderNavigationItem(path, label, activePath){
  const isActive = path === activePath; 
  return <a key={path} className={isActive ? "active" : ""} href={`#${path}`}>{label}</a>
}

export default App;
