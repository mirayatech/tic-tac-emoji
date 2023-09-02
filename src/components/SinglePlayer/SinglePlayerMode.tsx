import { useGameStore, useSinglePlayer } from "../../util";
import { Button, ButtonsContainer } from "../core/result/style";
import { StyledWrapper, PlayerCard, StyledTitle } from "./select/style";

export default function SinglePlayerMode() {
  const { setGameNavigate } = useGameStore();
  const { setIsHardMode } = useSinglePlayer();
  const handleOnEasyClick = () => {
    setIsHardMode(false);
    setGameNavigate("single-player-board");
  };

  const handleOnHardClick = () => {
    setIsHardMode(true);
    setGameNavigate("single-player-board");
  };
  return (
    <StyledWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <PlayerCard>
        <StyledTitle>
          <h1>Select the Game Mode</h1>
        </StyledTitle>

        <ButtonsContainer>
          <Button
            $isMulti={true}
            className="back-button"
            onClick={handleOnEasyClick}
          >
            Easy
          </Button>
          <Button className="play-button" onClick={handleOnHardClick}>
            Hard
          </Button>
        </ButtonsContainer>
      </PlayerCard>
    </StyledWrapper>
  );
}
