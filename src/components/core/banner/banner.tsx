import { useEffect, useState } from "react";
import { PlayerTurnBanner, PlayerTurnText, Slider } from "./style";
import { emojis } from "../../../util";

interface BannerProps {
  isPlayerXNext: boolean;
  playerSign: string | emojis | null;
  otherPlayerSign?: string;
}

export default function Banner({
  isPlayerXNext,
  playerSign,
  otherPlayerSign = "🤖",
}: BannerProps) {
  const [sliderLeft, setSliderLeft] = useState(isPlayerXNext ? "0%" : "50%");

  useEffect(() => {
    setSliderLeft(isPlayerXNext ? "0%" : "50%");
  }, [isPlayerXNext]);

  return (
    <PlayerTurnBanner>
      <PlayerTurnText>{playerSign}</PlayerTurnText>
      <PlayerTurnText>{otherPlayerSign}</PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
