import React from "react";
import "./App.css";
import "./TicTacToe.css";
import Game from "./components/Game";

// PUBLIC_INTERFACE
function App() {
  /**
   * The main App component which loads the Tic Tac Toe game.
   * This is the entry point for the frontend React application.
   */
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
