import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

import { SinglePlayer, Start } from "./components";
import { useGameStore } from "./util/use-game-store";
import { Toaster } from "react-hot-toast";

function App() {
  const { navigate } = useGameStore();
  return (
    <AnimatePresence>
      <Toaster />
      {navigate === "start" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Suspense>
            <Start />
          </Suspense>
        </motion.div>
      )}

      {navigate === "single-player" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Suspense>
            <SinglePlayer />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
