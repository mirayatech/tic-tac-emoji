import { Icon } from "@iconify/react";
import { useState } from "react";
import { colors } from "../../../assets/variables";

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

export default function SelectBox() {
  const { setPlayerSign, setGameNavigate, setNavigate, playerSign } =
    useGameStore();
  const [selectedSign, setSelectedSign] = useState<"" | "X" | "O">("");

  const handleClick = (sign: "X" | "O") => {
    setPlayerSign(sign);
    setSelectedSign(sign);
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
            shadowColor={colors.redShadow}
          >
            <MarkIcon />
          </XButton>

          <span>OR</span>

          <OButton
            onClick={handleClick.bind(null, "O")}
            aria-label="Player O"
            selected={selectedSign === "O"}
            shadowColor={colors.yellowShadow}
          >
            <Icon icon={CircleIcon} />
          </OButton>
        </Boxes>
        <ButtonsContainer>
          <Button
            aria-label="back to home"
            onClick={() => setNavigate("start")}
          >
            Back
          </Button>
          <Button
            disabled={!playerSign}
            onClick={() => setGameNavigate("single-player-board")}
          >
            Play
          </Button>
        </ButtonsContainer>
      </Card>
    </Wrapper>
  );
}
