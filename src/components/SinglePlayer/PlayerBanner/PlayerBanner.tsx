import { useState, useEffect } from "react";
import { colors } from "../../../assets/variables";
import { useSinglePlayer } from "../../../util";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./Style";

export function PlayerBanner({ isPlayerXNext }: { isPlayerXNext: boolean }) {
  const [sliderLeft, setSliderLeft] = useState(isPlayerXNext ? "0%" : "50%");
  const { playerSign } = useSinglePlayer();
  useEffect(() => {
    setSliderLeft(isPlayerXNext ? "0%" : "50%");
  }, [isPlayerXNext]);

  const getColor = (isPlayerXNext: boolean) => {
    if (isPlayerXNext) return "white";
    return colors.yellowDarker;
  };

  return (
    <PlayerTurnBanner>
      <PlayerTurnText color={getColor(isPlayerXNext)}>
        {playerSign}
      </PlayerTurnText>
      <PlayerTurnText color={getColor(!isPlayerXNext)}>🤖</PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
