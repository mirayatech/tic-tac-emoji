import { useState, useEffect } from "react";
import { useGameStore } from "../../../util/use-game-store";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./Styles";

export default function PlayerBanner() {
  const { playerTurn } = useGameStore();

  const [sliderLeft, setSliderLeft] = useState(playerTurn ? "0%" : "50%");

  useEffect(() => {
    setSliderLeft(playerTurn ? "0%" : "50%");
  }, [playerTurn]);

  return (
    <PlayerTurnBanner>
      <PlayerTurnText>Your Turn</PlayerTurnText>
      <PlayerTurnText>Bot's Turn</PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
