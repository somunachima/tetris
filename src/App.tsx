import './App.css'
import Board from './components/Board'
import { useGame } from './hooks/useGame';

function App() {
  const {board, startGame, isPlaying} = useGame();

  return (
    <div className="App">
      <h1 className="title"><strong>TETRIS</strong></h1>
      <div className="button">
        {isPlaying ? null : (
          <button onClick={startGame}>New Game</button>
        )}
      </div>
      <Board currentBoard={board}/>
    </div>
  )
}

export default App
