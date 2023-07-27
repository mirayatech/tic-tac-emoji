import { PlayerBoard, Result, SelectBox } from ".";
import { useGameStore } from "../../util/use-game-store";
import { StyledContainer } from "../Container/Styles";

export default function SinglePlayer() {
  const { gameNavigate } = useGameStore();
  return (
    <StyledContainer>
      {gameNavigate === "select-box" && <SelectBox />}
      {gameNavigate === "single-player-board" && <PlayerBoard />}
      {gameNavigate === "single-player-result" && <Result />}
    </StyledContainer>
  );
}
