import { useEffect, useState } from "react";
import { CircleIcon, MarkIcon } from "../../../assets/icon";
import { colors } from "../../../assets/variables";
import { checkSinglePlayerWinner } from "../../../util/check-winner-service";
import { useGameStore } from "../../../util/useGameStore";
import PlayerBanner from "./PlayerBanner";
import { PlayArea, WinningBox, XPlayer, OPlayer, Box } from "./Styles";
import { motion } from "framer-motion";
import { useSinglePlayer } from "../../../util/useSinglePlayerStore";

export default function GameBoard() {
  const { setGameNavigate } = useGameStore();

  const { playerTurn, board, setBox, botMove, playerSign, winner, setWinner } =
    useSinglePlayer();
  const [winningIndices, setWinningIndices] = useState<number[] | null>(null);

  useEffect(() => {
    const [winner, indices] = checkSinglePlayerWinner(board);
    setWinningIndices(indices);
    if (winner) {
      setWinner(winner);
      setTimeout(() => {
        setGameNavigate("single-player-result");
      }, 1500);
    } else if (!playerTurn && !winner) {
      botMove();
    }
  }, [board, playerTurn, winner, setWinner, botMove]);

  const handleBoxClick = (index: number) => {
    if (board[index] === null && playerTurn) {
      setBox(index, playerSign);
      useSinglePlayer.getState().setPlayerTurn(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <PlayerBanner />
      <PlayArea>
        {board.map((box, index) => {
          const isWinningBox = winningIndices?.includes(index);
          const BoxComponent = isWinningBox ? WinningBox : Box;
          const boxColor = isWinningBox ? colors.green : colors.lightPurple;
          return (
            <BoxComponent
              key={index}
              onClick={() => handleBoxClick(index)}
              initial={{ backgroundColor: colors.lightPurple }}
              animate={{ backgroundColor: boxColor }}
              transition={{ duration: 0.3 }}
            >
              {box && (
                <>
                  {box === "X" ? (
                    <XPlayer>
                      <MarkIcon />
                    </XPlayer>
                  ) : (
                    <OPlayer>
                      <CircleIcon />
                    </OPlayer>
                  )}
                </>
              )}
            </BoxComponent>
          );
        })}
      </PlayArea>
    </motion.div>
  );
}
