/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";
import LostFiguresComponent from "./components/LostFiguresComponent";
import Timer from "./components/Timer";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [whitePlayer]);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <>
      <section className="main-section">
        <div className="container-title">
          <h1>CHESS</h1>
          <h2 className="title">Current player: {currentPlayer?.color}</h2>
        </div>

        <div className="App">
          <div>
            <Timer restart={restart} currentPlayer={currentPlayer} />
          </div>
          
          <BoardComponent
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <div className="container-lost-figures">
            <LostFiguresComponent
              title="Black Figures"
              figures={board.lostBlackFigures}
            />
            <LostFiguresComponent
              title="White Figures"
              figures={board.lostWhiteFigures}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
