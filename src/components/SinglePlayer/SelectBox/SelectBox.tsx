import { useState } from "react";
import { CircleIcon, MarkIcon } from "../../../assets/icon";
import { useGameStore } from "../../../util/use-game-store";
import {
  Boxes,
  Button,
  ButtonsContainer,
  Card,
  Divider,
  OButton,
  Title,
  Wrapper,
  XButton,
} from "./Styles";
import { toast } from "react-hot-toast";

export default function SelectBox() {
  const { setPlayerSign, setGameNavigate, setNavigate } = useGameStore();
  const [selectedSign, setSelectedSign] = useState<"" | "X" | "O">("");
  const [signSelected, setSignSelected] = useState(false);

  const handleClick = (sign: "X" | "O") => {
    setPlayerSign(sign);
    setSelectedSign(sign);
    setSignSelected(true);
  };

  const handlePlayClick = () => {
    if (!signSelected) {
      return toast("Select a Player", {
        icon: "🔮",
      });
    }
    setGameNavigate("single-player-board");
  };

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <Title>
          <h1>Select who you want to be</h1> <Divider />
        </Title>
        <Boxes>
          <XButton
            onClick={handleClick.bind(null, "X")}
            aria-label="Player X"
            selected={selectedSign === "X"}
          >
            <MarkIcon />
          </XButton>

          <span>OR</span>

          <OButton
            onClick={handleClick.bind(null, "O")}
            aria-label="Player O"
            selected={selectedSign === "O"}
          >
            <CircleIcon />
          </OButton>
        </Boxes>
        <ButtonsContainer>
          <Button
            aria-label="back to home"
            onClick={() => setNavigate("start")}
          >
            Back
          </Button>
          <Button onClick={handlePlayClick}>Play</Button>
        </ButtonsContainer>
      </Card>
    </Wrapper>
  );
}
