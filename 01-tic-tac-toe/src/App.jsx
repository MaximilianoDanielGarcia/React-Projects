import confetti from 'canvas-confetti';
import { useState } from 'react';
import './App.css'
import { Square } from './components/square';
import { TURNS, WINNER_COMBOS } from './constants';
import { WinnerModal } from './components/winner-modal';
import { resetGameStorage, saveGameToStorage } from './logic/storage/local';

function App() {

  const [board, setBoard] = useState(() => {

    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {

    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;

  });

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }

    return null;
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({ newBoard, newTurn });

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>

                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
