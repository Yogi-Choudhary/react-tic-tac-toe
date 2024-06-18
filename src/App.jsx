import Playe from "./components/Playe"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Playe name="Player 1" symbol="X"/>
          <Playe name="Player 2" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
