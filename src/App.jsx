import { useState } from "react"
import Playe from "./components/Playe"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  
  const activePlayer = deriveActivePlayer(gameTurns);

  // let currentPlayer = 'X'
  // if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
  //   currentPlayer = 'O'
  // }

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTruns) => {

      const currentPlayer = deriveActivePlayer(prevTruns);

      // let currentPlayer = 'X'
      // if (prevTruns.length > 0 && prevTruns[0].player === 'X'){
      //   currentPlayer = 'O'
      // }
      const updatedTruns = [
        {square: { row: rowIndex, col: colIndex}, player: currentPlayer }, ...prevTruns,
      ];
      return updatedTruns;
    });

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Playe initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Playe initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
