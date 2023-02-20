import { createContext, useContext, useState } from "react";
import { clacWinner } from "../helper/game";
import { ModalContext } from "./ModalContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState('start')
    const [activeUser, setActiveUser] = useState('x')
    const [winner, setWinner] = useState(null)
    const [winnerLine, setWinnerLine] = useState(null)
    const [gameMode, setGameMode] = useState('single')
    const [cells, setCells] = useState(new Array(9).fill(''))
    const [xnext, setXnext] = useState(false)
    const { showModal, setModalType, hideModal } = useContext(ModalContext);
    const [ties, setTies] = useState({x:0, o:0})

    const handleNext = () => {
        setCells(new Array(9).fill(""));
         setXnext(winner === "x"); 
        setWinner(null);
        setWinnerLine(null);
        hideModal()
    }

    const handleReset = () => {
        setCells(new Array(9).fill(''))
        setWinner(null)
        setWinnerLine(null)
        setXnext(false)
        setGame('start')
        setActiveUser('x')
        setTies({x:0, o:0})
        hideModal()
    }

    const handleCellClick = (index) => {
        const currentPlayer = xnext ? 'o' : 'x'
        if(gameMode === 'single' && currentPlayer !== activeUser) return
        let newCells = [...cells]
        newCells[index] = !xnext ? 'x' : 'o'
        setCells(newCells)
        setXnext(!xnext)
        checkWinner(newCells)
    }

    const checkWinner = (cells) => {
            const winner = clacWinner(cells)
            if(winner) {
                setWinner(winner.winner)
                setWinnerLine(winner.line)
                const newTies = {...ties}
                newTies[winner.winner]++;

                setTies(newTies);

                // setGame('end')
                setModalType('winner')
                showModal()
            }
    }

    const changeMode = (mode) => {
        setGameMode(mode)
        setGame('game')
    }

    return (
      <GameContext.Provider
        value={{
          game,
          activeUser,
          winner,
          gameMode,
          xnext,
          ties,
          winnerLine,
          cells,
          setGame,
          setActiveUser,
          changeMode,
          setWinner,
          handleCellClick,
          handleReset,
          handleNext,
        }}
      >
        {children}
      </GameContext.Provider>
    );
}