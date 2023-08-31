import { useState, useEffect } from "react";
import { colors } from "../../assets/variables";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import {
  PlayerTurnBanner,
  PlayerTurnText,
  Slider,
} from "../SinglePlayer/PlayBoard/Styles";

export function PlayerBanner({ isMultiplayer }: { isMultiplayer: boolean }) {
  const { multiplayerPlayerXIsNext } = useMultiplayerStore();

  const [sliderLeft, setSliderLeft] = useState(
    multiplayerPlayerXIsNext ? "0%" : "50%"
  );

  useEffect(() => {
    setSliderLeft(multiplayerPlayerXIsNext ? "0%" : "50%");
  }, [multiplayerPlayerXIsNext]);

  const getColor = (isPlayerXNext: boolean) => {
    if (isPlayerXNext) return "white";
    return colors.yellowDarker; // Assuming O is the other player's color in multiplayer
  };

  return (
    <PlayerTurnBanner>
      <PlayerTurnText color={getColor(multiplayerPlayerXIsNext)}>
        {isMultiplayer ? "X's Turn" : "Your Turn"}
      </PlayerTurnText>
      <PlayerTurnText color={getColor(!multiplayerPlayerXIsNext)}>
        {isMultiplayer ? "O's Turn" : "Bot's Turn"}
      </PlayerTurnText>
      <Slider style={{ left: sliderLeft }}></Slider>
    </PlayerTurnBanner>
  );
}
