import { useContext } from 'react';
import './App.css';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Start from './components/start/Start';
import { GameContext } from './context/GameContext';

function App() {
  const {game, setGame} = useContext(GameContext)
  return (
    <div className="App">
    <div className="container">
      {game === 'start' && <Start />}
      {game === 'game' && <Board/>}
    </div>
    <Modal/>
    </div>
  );
}

export default App;
