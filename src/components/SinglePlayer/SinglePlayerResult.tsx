import { motion } from "framer-motion";
import { useSinglePlayer } from "../../util";
import { useGameStore } from "../../util/useGameStore";
import { Result } from "../core";

export default function SinglePlayerResult() {
  const { gameResult, reset } = useSinglePlayer();
  const { setNavigate, setGameNavigate } = useGameStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Result
        gameResult={gameResult}
        reset={reset}
        setNavigate={setNavigate}
        setGameNavigate={setGameNavigate}
        isMultiplayer={false}
        multiplayerWinner={null}
      />
    </motion.div>
  );
}
