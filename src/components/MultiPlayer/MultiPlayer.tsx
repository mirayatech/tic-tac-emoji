import { MultiPlayerBoard, MultiPlayerResult } from ".";
import { useGameStore } from "../../util/useGameStore";

export default function MultiPlayer() {
  const { gameNavigate } = useGameStore();

  return (
    <>
      {gameNavigate === "multi-player" && <MultiPlayerBoard />}
      {gameNavigate === "multi-player-result" && <MultiPlayerResult />}
    </>
  );
}
