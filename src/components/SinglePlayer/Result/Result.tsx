import WIN from "../../../assets/images/win.png";
import DRAW from "../../../assets/images/draw.png";
import LOSE from "../../../assets/images/lose.png";
import { useGameStore } from "../../../util/use-game-store";
import { Divider, ButtonsContainer, Button } from "../SelectBox/Styles";
import { Card, Title, WinImage, DrawImage, LoseImage } from "./Styles";
import { motion } from "framer-motion";

export default function Result() {
  const { playerSign, winner, resetSinglePlayer, reset } = useGameStore();

  if (!winner) {
    return null;
  }

  const resultTitle =
    winner === playerSign
      ? "You won the game"
      : winner === "draw"
      ? "It's a draw"
      : "You lost the game";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {winner && (
        <Card>
          <Title>
            <h1>{resultTitle}</h1>
            <Divider />

            {winner === playerSign ? (
              <WinImage src={WIN} />
            ) : winner === "draw" ? (
              <DrawImage src={DRAW} />
            ) : (
              <LoseImage src={LOSE} />
            )}
          </Title>
          <ButtonsContainer>
            <Button onClick={() => resetSinglePlayer()}>Replay</Button>
            <Button onClick={() => reset()}>Home</Button>
          </ButtonsContainer>
        </Card>
      )}
    </motion.div>
  );
}
