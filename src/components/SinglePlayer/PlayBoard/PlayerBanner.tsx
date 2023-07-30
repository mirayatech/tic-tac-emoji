import { useState, useEffect } from "react";
import { useGameStore } from "../../../util/use-game-store";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./Styles";
import { colors } from "../../../assets/variables";

export default function PlayerBanner() {
  const { playerTurn, playerSign } = useGameStore();

  const [sliderLeft, setSliderLeft] = useState(playerTurn ? "0%" : "50%");

  useEffect(() => {
    setSliderLeft(playerTurn ? "0%" : "50%");
  }, [playerTurn]);

  const getColor = (
    isPlayerTurn: boolean,
    playerSign: "X" | "O" | null
  ): string => {
    if (isPlayerTurn) return "white";
    if (playerSign === "X") return colors.red;
    if (playerSign === "O") return colors.yellowDarker;
    return "black";
  };

  return (
    <PlayerTurnBanner>
      <PlayerTurnText color={getColor(playerTurn, playerSign)}>
        Your Turn
      </PlayerTurnText>
      <PlayerTurnText
        color={getColor(!playerTurn, playerSign === "X" ? "O" : "X")}
      >
        Bot's Turn
      </PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
