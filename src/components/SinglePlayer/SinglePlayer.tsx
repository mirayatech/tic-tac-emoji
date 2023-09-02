import { SinglePlayerBoard, SinglePlayerResult, SelectBox } from ".";
import { useGameStore } from "../../util/useGameStore";

export default function SinglePlayer() {
  const { gameNavigate } = useGameStore();
  return (
    <>
      {gameNavigate === "select-box" && <SelectBox />}
      {gameNavigate === "single-player-board" && <SinglePlayerBoard />}
      {gameNavigate === "single-player-result" && <SinglePlayerResult />}
    </>
  );
}
