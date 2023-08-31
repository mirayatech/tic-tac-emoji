import { useState, useEffect } from "react";
import { useSinglePlayer } from "../../../util";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./Style";

export function PlayerBanner({ isPlayerXNext }: { isPlayerXNext: boolean }) {
  const [sliderLeft, setSliderLeft] = useState(isPlayerXNext ? "0%" : "50%");
  const { playerSign } = useSinglePlayer();
  useEffect(() => {
    setSliderLeft(isPlayerXNext ? "0%" : "50%");
  }, [isPlayerXNext]);

  return (
    <PlayerTurnBanner>
      <PlayerTurnText>{playerSign}</PlayerTurnText>
      <PlayerTurnText>🤖</PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
