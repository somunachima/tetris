import './App.css'
import Board from './components/Board'
import { useGame } from './hooks/useGame';

function App() {
  const {board, startGame, isPlaying, hasStartedOnce} = useGame();

  return (
    <div className="App">
      <h1 className="title"><strong>TETRIS</strong></h1>
      <div className="button">
        {isPlaying ? null : (
          <button onClick={startGame}>
            {hasStartedOnce ? 'New Game' : 'Start Game'}
          </button>
        )}
      </div>
      <Board currentBoard={board}/>
    </div>
  )
}

export default App
