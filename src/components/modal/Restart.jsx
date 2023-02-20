import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

const Restart = () => {
  const { handleReset } = useContext(GameContext);
  const {hideModal} = useContext(ModalContext)

  return (
    <div className="restart">
      <h3>Restart Game?</h3>
      <div className="restart_btn">
        <button className="btn btn-sm " onClick={hideModal}>
          no, cancel
        </button>
        <button className="btn btn-sm btn--secondary" onClick={handleReset}>
          yes, restart
        </button>
      </div>
    </div>
  );
}

export default Restart