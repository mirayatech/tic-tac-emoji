import { AnimatePresence, motion } from "framer-motion";

import { Start } from "./components";
import { useGameStore } from "./util/use-game-store";

function App() {
  const { navigate } = useGameStore();
  return (
    <AnimatePresence>
      {navigate === "start" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Start />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
