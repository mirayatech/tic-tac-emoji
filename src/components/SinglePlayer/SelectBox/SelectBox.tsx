import { useState, useEffect } from "react";
import { useGameStore } from "../../../util/useGameStore";
import {
  Emojis,
  EmojiButton,
  StyledDivider,
  StyledTitle,
  StyledWrapper,
  PlayerCard,
  Buttons,
} from "./Styles";
import { toast } from "react-hot-toast";
import { useSinglePlayer } from "../../../util/useSinglePlayerStore";
import { emojis, getRandomEmoji } from "../../../util";
import { Button } from "../Styles";

export default function SelectBox() {
  const { setPlayerSign } = useSinglePlayer();
  const { setGameNavigate, setNavigate } = useGameStore();
  const [signSelected, setSignSelected] = useState(false);
  const [randomEmojiO, setRandomEmojiO] = useState<emojis>("" as emojis);
  const [randomEmojiX, setRandomEmojiX] = useState<emojis>("" as emojis);
  const [selectedEmoji, setSelectedEmoji] = useState<emojis>("" as emojis);

  useEffect(() => {
    const emojiX = getRandomEmoji();
    const emojiO = getRandomEmoji();
    setRandomEmojiX(emojiX);
    setPlayerSign(emojiX);
    setRandomEmojiO(emojiO);
  }, []);

  const handleClick = (sign: emojis) => {
    setSelectedEmoji(sign);
    setPlayerSign(sign);
    setSignSelected(true);
  };

  const handlePlayClick = () => {
    if (!signSelected) {
      return toast("Select a Player", {
        icon: "🔮",
      });
    }
    setGameNavigate("single-player-board");
  };

  return (
    <StyledWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <PlayerCard>
        <StyledTitle>
          <h1>Select who you want to be</h1>
        </StyledTitle>
        <StyledDivider />
        <Emojis>
          <EmojiButton
            onClick={() => handleClick(randomEmojiX)}
            aria-label="Player X"
            $selected={selectedEmoji === randomEmojiX}
          >
            {randomEmojiX}
          </EmojiButton>

          <span>OR</span>

          <EmojiButton
            onClick={() => handleClick(randomEmojiO)}
            aria-label="Player O"
            $selected={selectedEmoji === randomEmojiO}
          >
            {randomEmojiO}
          </EmojiButton>
        </Emojis>
        <StyledDivider $noMarginTop={true} />
        <Buttons>
          <Button
            $isMulti={true}
            className="back-button"
            aria-label="back to home"
            onClick={() => setNavigate("start")}
          >
            Back
          </Button>
          <Button className="play-button" onClick={handlePlayClick}>
            Play
          </Button>
        </Buttons>
      </PlayerCard>
    </StyledWrapper>
  );
}
