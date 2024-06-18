import Playe from "./components/Playe"
import GameBoard from "./components/GameBoard"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Playe initialName="Player 1" symbol="X"/>
          <Playe initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
