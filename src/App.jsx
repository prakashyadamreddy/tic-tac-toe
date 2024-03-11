import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  
  return (
    <main>
      <div id = "game-container">
        <ol id="players">
          <Player name ="player 1" symbol ="x"/>
          <Player name ="player 2" symbol ="o"/>
        </ol>
        <GameBoard/>
      </div>
      Log
    </main>
  )
}

export default App
