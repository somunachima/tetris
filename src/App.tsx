import './App.css'
import Board from './components/Board'
import { EmptyCell } from './types'

function App() {

  return (
    <div className="App">
      <h1 className="title"><strong>TETRIS</strong></h1>
      <Board currentBoard={board}/>
    </div>
  )
}

export default App
