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

  const calculateWinner = array => {
    let lines = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1,4,7], [2, 4, 6], [2, 5, 8], [3,4,5], [6, 7 ,8]]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (array[a] === 'X' && array[b] === 'X' && array[c] === 'X') {
        return `${array[a]} Won!`
      } else if (array[a] === 'O' && array[b] === 'O' && array[c] === 'O') {
        return `${array[a]} Won!`
      }
  }
  return 'Who will win?'
  }

  return (
    <div className="App">
      <span>{calculateWinner(gameSquares)}</span>
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
