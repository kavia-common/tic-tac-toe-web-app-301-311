import React from "react";
import Square from "./Square";

// PUBLIC_INTERFACE
function Board({ squares, onSquareClick, winningLine, isBoardDisabled }) {
  /**
   * Board component for rendering 3x3 grid of Squares.
   * @param {Array} squares - ['X','O',..], 9 elements
   * @param {function} onSquareClick - click handler (index)
   * @param {Array|null} winningLine - winning squares, if any
   * @param {bool} isBoardDisabled - true if no more play allowed
   */
  // PUBLIC_INTERFACE
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        highlight={winningLine ? winningLine.includes(i) : false}
        disabled={!!squares[i] || isBoardDisabled}
        ariaLabel={`Cell ${i%3+1}, row ${Math.floor(i/3)+1}. ${squares[i] ? "Occupied by " + squares[i] : "Empty"}`}
      />
    );
  };

  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe Board">
      {[0, 1, 2].map((row) => (
        <div className="ttt-board-row" role="row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
}

export default Board;
