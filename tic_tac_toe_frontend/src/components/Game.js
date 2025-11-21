import React, { useState } from "react";
import Board from "./Board";
import "../TicTacToe.css";

// PUBLIC_INTERFACE
function Game() {
  /**
   * The main Tic Tac Toe Game component.
   * Handles the full game state, winner detection, reset, and status display.
   */
  const EMPTY_BOARD = Array(9).fill(null);
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [isXNext, setIsXNext] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState({ winner: null, line: null });
  const [isDraw, setIsDraw] = useState(false);

  // PUBLIC_INTERFACE
  const calculateWinner = (squares) => {
    /**
     * Returns winner and winning line if any.
     * @param {Array} squares - Current board state
     * @returns {{winner: string|null, line: Array|null}}
     */
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; ++i) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return { winner: null, line: null };
  };

  // PUBLIC_INTERFACE
  const handleSquareClick = (i) => {
    /**
     * Handles a click on a square.
     * @param {number} i - Index of square
     */
    if (board[i] || winnerInfo.winner) return;
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? "X" : "O";
    const nextWinner = calculateWinner(nextBoard);
    setBoard(nextBoard);
    setIsXNext((prev) => !prev);
    setWinnerInfo(nextWinner);

    if (!nextWinner.winner && !nextBoard.includes(null)) {
      setIsDraw(true);
    } else {
      setIsDraw(false);
    }
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    /**
     * Resets the game to the initial state.
     */
    setBoard(EMPTY_BOARD);
    setIsXNext(true);
    setWinnerInfo({ winner: null, line: null });
    setIsDraw(false);
  };

  // Calculate status message
  let status;
  if (winnerInfo.winner) {
    status = (
      <span>
        Winner:{" "}
        <span
          className={
            winnerInfo.winner === "X" ? "status-x" : "status-o"
          }
        >
          {winnerInfo.winner}
        </span>
      </span>
    );
  } else if (isDraw) {
    status = <span>It's a Draw!</span>;
  } else {
    status = (
      <span>
        Current turn:{" "}
        <span className={isXNext ? "status-x" : "status-o"}>
          {isXNext ? "X" : "O"}
        </span>
      </span>
    );
  }

  return (
    <div className="ttt-app-bg">
      <div className="ttt-container">
        <h1 className="ttt-title">Tic Tac Toe</h1>
        <div
          className="ttt-status"
          role="status"
          aria-live="polite"
          tabIndex={0}
        >
          {status}
        </div>
        <Board
          squares={board}
          onSquareClick={handleSquareClick}
          winningLine={winnerInfo.line}
          isBoardDisabled={!!winnerInfo.winner || isDraw}
        />
        <button
          className="ttt-reset-btn"
          onClick={handleReset}
          aria-label="Reset or start a new game"
        >
          {winnerInfo.winner || isDraw ? "New Game" : "Reset"}
        </button>
      </div>
      <footer className="ttt-footer">
        <span>
          Built with <span aria-label="React logo" role="img">⚛️</span> React · Modern UI
        </span>
      </footer>
    </div>
  );
}

export default Game;
