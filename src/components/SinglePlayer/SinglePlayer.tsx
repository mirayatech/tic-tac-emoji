import { PlayerBoard, Result, SelectBox } from ".";
import { useGameStore } from "../../util/useGameStore";

export default function SinglePlayer() {
  const { gameNavigate } = useGameStore();
  return (
    <>
      {gameNavigate === "select-box" && <SelectBox />}
      {gameNavigate === "single-player-board" && <PlayerBoard />}
      {gameNavigate === "single-player-result" && <Result />}
    </>
  );
}
