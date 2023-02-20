import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'

const BoardCard = ({user='ahmed', active, index}) => {
    const {handleCellClick} = useContext(GameContext)
  return (
    <div
        onClick={() => handleCellClick(index)}
      className={`card 
      ${active && user === "x" && "shadow-blue"} 
      ${active && user === "o" && "shadow-yellow"}
      ${!active ? "shadow-gray" : 'active'}
      `}
    >
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
}

export default BoardCard