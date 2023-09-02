import { useState, useEffect } from "react";
import { useSinglePlayer } from "../../util/useSinglePlayerStore";
import { useGameStore } from "../../util/useGameStore";
import { calculateSinglePlayerWinner, emojis } from "../../util";
import { Banner, Board } from "../core";
import { motion } from "framer-motion";

export default function SinglePlayerBoard() {
  const { playerSign, board, setBoard, setGameResult, isHardMode } =
    useSinglePlayer();
  const { gameNavigate, setGameNavigate } = useGameStore();
  const [winner, setWinner] = useState<emojis | null>(null);
  const [isPlayerXNext, setIsPlayerXNext] = useState<boolean>(true);
  const [isBotTurn, setIsBotTurn] = useState<boolean>(false);

  useEffect(() => {
    const currentPlayer: emojis = isPlayerXNext ? playerSign! : "🤖";
    if (
      currentPlayer === "🤖" &&
      !winner &&
      gameNavigate === "single-player-board"
    ) {
      setIsBotTurn(true);
      handleSimulateRobotMove();
    } else {
      setIsBotTurn(false);
    }
  }, [isPlayerXNext, playerSign, winner, gameNavigate]);

  const handleClick = (index: number) => {
    if (board[index] || winner || isBotTurn) {
      return;
    }

    const newBoard: Array<emojis | null> = [...board];
    newBoard[index] = isPlayerXNext ? playerSign : "🤖";
    setBoard(newBoard);
    setIsPlayerXNext(!isPlayerXNext);

    const newWinner: emojis | null = calculateSinglePlayerWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      if (newWinner === playerSign) {
        setGameResult("win");
      } else {
        setGameResult("lose");
      }
      setTimeout(() => {
        setGameNavigate("single-player-result");
      }, 1500);
    } else if (!newBoard.includes(null)) {
      setTimeout(() => {
        setGameResult("draw");
        setGameNavigate("single-player-result");
      }, 1500);
    }
  };

  const handleSimulateRobotMove = () => {
    if (!isHardMode) {
      const simulateEasyRobotMove = () => {
        setTimeout(() => {
          const emptyCells: number[] = board
            .map((cell, index) => (cell === null ? index : -1))
            .filter((index) => index !== -1) as number[];
          if (emptyCells.length > 0) {
            const randomIndex: number = Math.floor(
              Math.random() * emptyCells.length
            );
            handleClick(emptyCells[randomIndex]);
          }
        }, 1100);
      };
      simulateEasyRobotMove();
    }

    const simulateHardRobotMove = () => {
      setTimeout(() => {
        const emptyCells: number[] = board
          .map((cell, index) => (cell === null ? index : -1))
          .filter((index) => index !== -1) as number[];

        if (emptyCells.length > 0) {
          for (let i = 0; i < emptyCells.length; i++) {
            const testBoard = [...board];
            testBoard[emptyCells[i]] = "🤖";
            if (calculateSinglePlayerWinner(testBoard) === "🤖") {
              handleClick(emptyCells[i]);
              return;
            }
          }
          for (let i = 0; i < emptyCells.length; i++) {
            const testBoard = [...board];
            testBoard[emptyCells[i]] = playerSign;
            if (calculateSinglePlayerWinner(testBoard) === playerSign) {
              handleClick(emptyCells[i]);
              return;
            }
          }
          const randomIndex: number = Math.floor(
            Math.random() * emptyCells.length
          );
          handleClick(emptyCells[randomIndex]);
        }
      }, 1100);
    };
    simulateHardRobotMove();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Banner isPlayerXNext={isPlayerXNext} playerSign={playerSign} />
      <Board squares={board} onClick={handleClick} />
    </motion.div>
  );
}
