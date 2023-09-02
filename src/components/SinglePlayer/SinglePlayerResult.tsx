import { useSinglePlayer } from "../../util";
import { useGameStore } from "../../util/useGameStore";
import { Result } from "../core";

export default function SinglePlayerResult() {
  const { gameResult, reset } = useSinglePlayer();
  const { setNavigate, setGameNavigate } = useGameStore();

  return (
    <Result
      gameResult={gameResult}
      reset={reset}
      setNavigate={setNavigate}
      setGameNavigate={setGameNavigate}
      isMultiplayer={false}
      multiplayerWinner={null}
    />
  );
}
