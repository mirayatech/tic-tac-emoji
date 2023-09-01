import { useEffect } from "react";
import { useGameStore } from "../../util/useGameStore";
import Result from "./Result";
import { PlayerBanner } from "./PlayerBanner";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import Board from "../core/board/board";

export default function MultiPlayerBoard() {
  const { setGameNavigate, gameNavigate } = useGameStore();
  const {
    multiplayerBoard,
    multiplayerWinner,
    multiplayerHandleClick,
    emojiX,
    emojiO,
    multiplayerPlayerXIsNext,
  } = useMultiplayerStore();

  const isDraw = multiplayerBoard.every((square) => square !== null);

  useEffect(() => {
    if (multiplayerWinner || isDraw) {
      setGameNavigate("multi-player-result");
    }
  }, [multiplayerWinner, isDraw]);

  return (
    <>
      {gameNavigate === "multi-player-result" && <Result />}

      <PlayerBanner
        isPlayerXNext={multiplayerPlayerXIsNext}
        playerSign={emojiX}
        otherPlayerSign={emojiO}
      />
      <Board squares={multiplayerBoard} onClick={multiplayerHandleClick} />
    </>
  );
}
