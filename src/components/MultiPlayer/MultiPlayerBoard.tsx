import { useEffect } from "react";
import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { Banner, Board } from "../core";

export default function MultiPlayerBoard() {
  const { setGameNavigate } = useGameStore();
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
      <Banner
        isPlayerXNext={multiplayerPlayerXIsNext}
        playerSign={emojiX}
        otherPlayerSign={emojiO}
      />
      <Board squares={multiplayerBoard} onClick={multiplayerHandleClick} />
    </>
  );
}
