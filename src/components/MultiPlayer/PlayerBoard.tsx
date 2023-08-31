import { useEffect } from "react";

import useMultiplayerStore from "../../util/useMultiplayerStore";
import Result from "./Result";
import { PlayerBanner } from "./PlayerBanner";
import { useGameStore } from "../../util/useGameStore";

export default function PlayerBoard() {
  const { setGameNavigate, gameNavigate } = useGameStore();

  const { multiplayerBoard, multiplayerWinner, multiplayerHandleClick } =
    useMultiplayerStore();

  const renderSquare = (index: number) => {
    return (
      <button className="square" onClick={() => multiplayerHandleClick(index)}>
        {multiplayerBoard[index]}
      </button>
    );
  };

  const isDraw = multiplayerBoard.every((square) => square !== null);

  useEffect(() => {
    if (multiplayerWinner || isDraw) {
      setGameNavigate("multi-player-result");
    }
  }, [multiplayerWinner, isDraw]);

  return (
    <>
      {gameNavigate === "multi-player-result" ? <Result /> : null}
      <div>
        <PlayerBanner isMultiplayer={true} />
        <div>
          <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </>
  );
}
