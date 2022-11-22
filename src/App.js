import React, { useState } from 'react'
import Square from './components/Square';
import './App.css';

function App() {
  const person = {
    name: "Marcus"
  }
  const [gameSquares, updateGameSquares] = useState(['', '', '', '',  '', '', '', '', '']);
  const [player, updatePlayer] = useState(true);
  return (
    <div className="App">
      <Square squares={gameSquares} setSquares={updateGameSquares} player={player} setPlayer={updatePlayer} />
    </div>
  );
}

export default App;
