import React from 'react';
import Title from './Title';
import Bikes from './Bikes';
import DadJoke from './Dadjoke';
import './App.css';

function App() {
  console.log("Heisan")
  return (
    <div className="App">
        <Title/>
        <DadJoke/>
        <Bikes/>
    </div>
  );
}

export default App;