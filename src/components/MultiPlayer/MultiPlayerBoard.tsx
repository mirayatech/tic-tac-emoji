import { useEffect } from "react";
import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { Banner, Board } from "../core";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        isPlayerXNext={multiplayerPlayerXIsNext}
        playerSign={emojiX}
        otherPlayerSign={emojiO}
      />
      <Board squares={multiplayerBoard} onClick={multiplayerHandleClick} />
    </motion.div>
  );
}
