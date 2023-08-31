import { Suspense } from "react";

import { MultiPlayer, SinglePlayer, Start } from "./components";
import { useGameStore } from "./util/useGameStore";
import { Toaster } from "react-hot-toast";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
  const { navigate } = useGameStore();
  return (
    <>
      <Toaster />

      {navigate === "start" && (
        <Suspense fallback={<Spinner />}>
          <Start />
        </Suspense>
      )}

      {navigate === "single-player" && (
        <Suspense fallback={<Spinner />}>
          <SinglePlayer />
        </Suspense>
      )}

      {navigate === "multi-player" && (
        <Suspense fallback={<Spinner />}>
          <MultiPlayer />
        </Suspense>
      )}
    </>
  );
}

export default App;
