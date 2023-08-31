import { PlayerBoard, Result } from ".";
import { useGameStore } from "../../util/useGameStore";

export default function MultiPlayer() {
  const { gameNavigate } = useGameStore();

  return (
    <>
      {gameNavigate === "multi-player" && <PlayerBoard />}
      {gameNavigate === "multi-player-result" && <Result />}
    </>
  );
}
