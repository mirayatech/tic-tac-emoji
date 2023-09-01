import {
  PlayerTurnBanner,
  PlayerTurnText,
  Slider,
} from "../SinglePlayer/PlayerBanner/Style";

export function PlayerBanner({
  isPlayerXNext,
  playerSign,
  otherPlayerSign,
}: {
  isPlayerXNext: boolean;
  playerSign: string;
  otherPlayerSign: string;
}) {
  const sliderLeft = isPlayerXNext ? "0%" : "50%";

  return (
    <PlayerTurnBanner>
      <PlayerTurnText>{playerSign}</PlayerTurnText>
      <PlayerTurnText>{otherPlayerSign}</PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
