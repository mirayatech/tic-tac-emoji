import { useGameStore, useSinglePlayer } from "../../../util";
import { ButtonsContainer } from "../../Start/Styles";
import { Button, Card, Emoji, Title } from "./Styles";

export default function Result() {
  const { gameResult, reset } = useSinglePlayer();
  const { setNavigate, setGameNavigate } = useGameStore();

  const handleOnHomeClick = () => {
    setNavigate("start");
    setGameNavigate("");
    reset();
  };

  const handleOnResetClick = () => {
    reset();
    setGameNavigate("select-box");
  };
  return (
    <Card>
      <Emoji>
        {gameResult === "win" && "🥳"}
        {gameResult === "lose" && "😢"}
        {gameResult === "draw" && "🤝"}
      </Emoji>
      <Title>
        {gameResult === "win" && <p>Congrats, you won!</p>}
        {gameResult === "lose" && <p>Oh no, you lost!</p>}
        {gameResult === "draw" && <p>It's a Draw!</p>}
      </Title>
      <ButtonsContainer>
        <Button onClick={handleOnResetClick}>Reset</Button>

        <Button onClick={handleOnHomeClick} $isMulti={true}>
          Home
        </Button>
      </ButtonsContainer>
    </Card>
  );
}
