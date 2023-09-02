import { Button, ButtonsContainer, Card, Emoji, Title } from "./style";

interface ResultProps {
  gameResult: string | null;
  multiplayerWinner: string | null;
  reset: () => void;
  setNavigate: (navigate: string) => void;
  setGameNavigate: (gameNavigate: string) => void;
  isMultiplayer: boolean;
}

export default function Result({
  gameResult,
  multiplayerWinner,
  reset,
  setNavigate,
  setGameNavigate,
  isMultiplayer,
}: ResultProps) {
  const handleOnHomeClick = () => {
    reset();
    setNavigate("start");
    setGameNavigate("");
  };

  const handleOnResetClick = () => {
    reset();
    setGameNavigate(isMultiplayer ? "multi-player" : "select-box");
  };

  return (
    <Card>
      <Emoji>
        {gameResult === "win" && "🏆"}
        {gameResult === "lose" && "😒"}
        {(gameResult === "draw" || multiplayerWinner === "draw") && "🤝"}
      </Emoji>
      <Title>
        {gameResult === "win" && "Congrats, you won!"}
        {gameResult === "lose" && " Oh no, you lost! "}
        {gameResult === "draw" && " It's a Draw!"}
        {isMultiplayer && (
          <>
            {multiplayerWinner === "draw" ? (
              " It's a draw! "
            ) : (
              <>
                Congratulations, <br />
                Player <span>{multiplayerWinner}</span> is the winner!
              </>
            )}
          </>
        )}
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
