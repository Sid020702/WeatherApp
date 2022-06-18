import React from 'react';
import './App.css';
import Humidity from './components/humidity/humidity.component';
import Overview from './components/overview/overview.component';
import Temperature from './components/temperature/temperature.component';

function App() {
  return (
    <div className="App">
      <Overview />
      <Temperature />
      <Humidity />
    </div>
  );
}

export default App;
