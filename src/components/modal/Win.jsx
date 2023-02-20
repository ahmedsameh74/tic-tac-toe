import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { ModalContext } from '../../context/ModalContext'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'

const Win = () => {
  const { winner, handleReset, handleNext } = useContext(GameContext);
  
  return (
    <div className="score">
      <p>you win!</p>
      <h3>{winner === "x" ? <Xicon /> : <Oicon />} Takes the round</h3>
      <div className="score_btn">
        <button className="btn btn-sm " onClick={handleReset}>
          Quit
        </button>
        <button className="btn btn--secondary" onClick={handleNext}>
          Next Round
        </button>
      </div>
    </div>
  );
}

export default Win