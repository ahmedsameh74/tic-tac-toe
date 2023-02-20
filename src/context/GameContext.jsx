import { createContext, useContext, useEffect, useState } from "react";
import { checkMove, clacWinner } from "../helper/game";
import { ModalContext } from "./ModalContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState('start')
    const [activeUser, setActiveUser] = useState('x')
    const [winner, setWinner] = useState(null)
    const [winnerLine, setWinnerLine] = useState(null)
    const [gameMode, setGameMode] = useState('cpu')
    const [cells, setCells] = useState(new Array(9).fill(''))
    const [xnext, setXnext] = useState(false)
    const { showModal, setModalType, hideModal } = useContext(ModalContext);
    const [ties, setTies] = useState({x:0, o:0})

    useEffect(() => {
        checkDraw()
        const currentUser = xnext ? 'o' : 'x'
        if(gameMode === 'cpu' && currentUser !== activeUser && !winner) {
            cpuMove(cells)
        }
    }, [xnext, winner, gameMode])

    const cpuMove = (cells) => {
        const nextMove = checkMove(cells, activeUser === 'x' ? 'o' : 'x')
        let newCells = [...cells]
        newCells[nextMove] = activeUser === 'x' ? 'o' : 'x'
        setCells(newCells)
        setXnext(!xnext)
        checkWinner(newCells)
    }

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

    const handleRestart = () => {
        showModal()
        setModalType('restart')
    }

    const handleCellClick = (index) => {
        if(cells[index] !== '' || winner) return
        const currentPlayer = xnext ? 'o' : 'x'
        if(gameMode === 'cpu' && currentPlayer !== activeUser) return
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

    const checkDraw = () => {
        const moves = cells.filter(cell => cell === '')
        if(moves.length === 0) {
            setWinner('draw')
            setModalType('winner')
            showModal()
        }
    }

    const changeMode = (mode) => {
        setGameMode(mode)
        setGame('game')
    }

    const checkUser = (user) => {
        if(gameMode === 'cpu') {
            if(user === activeUser) {
                return 'You'
            } else {
                return 'CPU'
            }
        }
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
          handleRestart,
          checkUser,
        }}
      >
        {children}
      </GameContext.Provider>
    );
}