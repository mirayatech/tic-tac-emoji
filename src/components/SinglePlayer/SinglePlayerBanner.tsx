import { emojis } from "../../util";
import { Banner } from "../core";

export default function SinglePlayerBanner({
  isPlayerXNext,
  playerSign,
}: {
  isPlayerXNext: boolean;
  playerSign: emojis | null;
}) {
  return <Banner isPlayerXNext={isPlayerXNext} playerSign={playerSign} />;
}
