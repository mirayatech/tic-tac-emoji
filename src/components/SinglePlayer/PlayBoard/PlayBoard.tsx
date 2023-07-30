import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { CircleIcon, MarkIcon } from "../../../assets/icon";
import { colors } from "../../../assets/variables";
import { checkWinner } from "../../../util/check-winner-service";
import { useGameStore } from "../../../util/use-game-store";
import PlayerBanner from "./PlayerBanner";
import { PlayArea, WinningBox, XPlayer, OPlayer, Box } from "./Styles";
import { motion } from "framer-motion";

export default function GameBoard() {
  const {
    playerTurn,
    board,
    setBox,
    botMove,
    playerSign,
    winner,
    setWinner,
    setGameNavigate,
  } = useGameStore();

  const [winningIndices, setWinningIndices] = useState<number[] | null>(null);

  useEffect(() => {
    const [winner, indices] = checkWinner(board);
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
      useGameStore.getState().setPlayerTurn(false);
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
                      <Icon icon={CircleIcon} />
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
