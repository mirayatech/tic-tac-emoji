import { useState, useEffect } from "react";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./Styles";
import { colors } from "../../../assets/variables";
import { useSinglePlayer } from "../../../util/useSinglePlayerStore";

export default function PlayerBanner({
  isMultiplayer,
}: {
  isMultiplayer?: boolean;
}) {
  const { playerTurn, playerSign } = useSinglePlayer();

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
        {isMultiplayer ? "X's Turn" : "Your Turn"}
      </PlayerTurnText>
      <PlayerTurnText
        color={getColor(!playerTurn, playerSign === "X" ? "O" : "X")}
      >
        {isMultiplayer ? "O's Turn" : "Bot's Turn"}
      </PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
