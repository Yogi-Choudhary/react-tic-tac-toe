import { useState } from "react"
import Playe from "./components/Playe"
import GameBoard from "./components/GameBoard"
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Playe initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Playe initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
