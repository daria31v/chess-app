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
  }, []);

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
    <h3>Current player: {currentPlayer?.color}</h3>
     <div className="App">
      <Timer restart={restart} currentPlayer={currentPlayer}/>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFiguresComponent title="BlackFigures" figures={board.lostBlackFigures}/>
        <LostFiguresComponent title="WhiteFigures" figures={board.lostWhiteFigures}/>
      </div>
      
    </div>
    </>
   
  );
};

export default App;
