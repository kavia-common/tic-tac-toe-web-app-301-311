import React from "react";

// PUBLIC_INTERFACE
function Square({ value, onClick, highlight, disabled, ariaLabel }) {
  /**
   * Renders an individual square (cell) for the Tic Tac Toe board.
   * @param {string|null} value - The value in this square ("X", "O", or null)
   * @param {function} onClick - Click handler callback
   * @param {boolean} highlight - Should highlight winning squares
   * @param {boolean} disabled - Should the square be pressable
   * @param {string} ariaLabel - Accessibility label for screen readers
   */
  return (
    <button
      className={`ttt-square${highlight ? " ttt-square-highlight" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={0}
      type="button"
    >
      <span className="ttt-square-content">{value}</span>
    </button>
  );
}

export default Square;
