import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { Result } from "../core";
import { motion } from "framer-motion";

export default function MultiplayerResult() {
  const { multiplayerWinner, reset } = useMultiplayerStore();
  const { setNavigate, setGameNavigate } = useGameStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Result
        multiplayerWinner={multiplayerWinner}
        reset={reset}
        setNavigate={setNavigate}
        setGameNavigate={setGameNavigate}
        isMultiplayer={true}
        gameResult={null}
      />
    </motion.div>
  );
}
