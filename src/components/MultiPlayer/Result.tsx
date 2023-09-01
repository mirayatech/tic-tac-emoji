import { styled } from "styled-components";
import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { Button, Card } from "../SinglePlayer/Result/Styles";
import { ButtonsContainer } from "../Start/Styles";

export default function Result() {
  const { multiplayerWinner, reset } = useMultiplayerStore();
  const { setNavigate, setGameNavigate } = useGameStore();

  const handleOnHomeClick = () => {
    reset();
    setNavigate("start");
    setGameNavigate("");
  };

  const handleOnResetClick = () => {
    reset();
    setGameNavigate("multi-player");
  };

  const Title = styled.h1`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 0 60px;

    span {
      font-size: 40px;
    }
  `;

  return (
    <Card>
      <div>
        {multiplayerWinner === "draw" ? (
          <Title>It's a draw!</Title>
        ) : (
          <Title>
            Player <span> {multiplayerWinner}</span> Wins!
          </Title>
        )}
        <ButtonsContainer>
          <Button onClick={handleOnResetClick}>Reset</Button>

          <Button onClick={handleOnHomeClick} $isMulti={true}>
            Home
          </Button>
        </ButtonsContainer>
      </div>
    </Card>
  );
}
