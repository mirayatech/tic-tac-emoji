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
    saveGame,
    clearGame,
  } = useMultiplayerStore();

  const isDraw = multiplayerBoard.every((square) => square !== null);

  useEffect(() => {
    if (multiplayerWinner) {
      setTimeout(() => {
        setGameNavigate("multi-player-result");
      }, 2000);
    } else if (isDraw) {
      setTimeout(() => {
        setGameNavigate("multi-player-result");
      }, 500);
    }
  }, [multiplayerWinner, isDraw]);

  useEffect(() => {
    saveGame();
    return () => {
      clearGame();
    };
  }, [saveGame, clearGame]);

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
