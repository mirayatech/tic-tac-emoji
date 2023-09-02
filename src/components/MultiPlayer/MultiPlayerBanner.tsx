import { Banner } from "../core";

interface MultiplayerBannerProps {
  isPlayerXNext: boolean;
  playerSign: string;
  otherPlayerSign: string;
}

export default function MultiplayerBanner({
  isPlayerXNext,
  playerSign,
  otherPlayerSign,
}: MultiplayerBannerProps) {
  return (
    <Banner
      isPlayerXNext={isPlayerXNext}
      playerSign={playerSign}
      otherPlayerSign={otherPlayerSign}
    />
  );
}
