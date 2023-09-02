import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { Result } from "../core";

export default function MultiplayerResult() {
  const { multiplayerWinner, reset } = useMultiplayerStore();
  const { setNavigate, setGameNavigate } = useGameStore();

  return (
    <Result
      multiplayerWinner={multiplayerWinner}
      reset={reset}
      setNavigate={setNavigate}
      setGameNavigate={setGameNavigate}
      isMultiplayer={true}
      gameResult={null}
    />
  );
}
