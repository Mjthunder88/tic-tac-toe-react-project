import React, { useState } from 'react'
import Square from './components/Square';
import './App.css';

function App() {
  // const person = {
  //   name: "Marcus"
  // }
  const [gameSquares, updateGameSquares] = useState(['', '', '', '',  '', '', '', '', '']);
  const [player, updatePlayer] = useState(true);

  const handleClick = () => {
    updateGameSquares(['', '', '', '', '', '', '', '', '',]);
    updatePlayer(true);
  }

  return (
    <div className="App">
      <div className='container'>
        {gameSquares.map((square, index) => {
          return <Square 
          squares={gameSquares} 
          setSquares={updateGameSquares} 
          player={player} 
          setPlayer={updatePlayer}
          squareValue={square}
          index={index}
          />
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
