import './App.css'
import Board from './components/Board'
import { useGame } from './hooks/useGame';

function App() {
  const {board, startGame, isPlaying, hasStartedOnce} = useGame();

  return (
    <div className="App">
      <h1 className="title"><strong>TETRIS</strong></h1>
      <div className="instructions">
        <h2>🕹 How to Play</h2>
        <ul>
          <li>Use <span className="arrow">←</span> and <span className="arrow">→</span> to move blocks left and right.</li>
          <li>Blocks fall automatically — plan ahead to fit them efficiently.</li>
          <li>Fill an entire row to clear the row.</li>
          <li>The game ends when blocks reach the top of the board.</li>
          <li>Press New Game to restart.</li>
        </ul>
      </div>
      <div>
        {isPlaying ? null : (
          <button className="button" onClick={startGame}>
            {hasStartedOnce ? 'New Game' : 'Start Game'}
          </button>
        )}
      </div>
      <Board currentBoard={board}/>
    </div>
  )
}

export default App
