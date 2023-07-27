import { Container } from "./Styles";

import { SelectBox } from ".";
import { useGameStore } from "../../util/use-game-store";

export default function SinglePlayer() {
  const { gameNavigate } = useGameStore();
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {gameNavigate === "select-box" && <SelectBox />}
    </Container>
  );
}
