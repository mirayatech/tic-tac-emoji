import { useState, useEffect } from "react";
import { useSinglePlayer } from "../../../util/useSinglePlayerStore";
import { useGameStore } from "../../../util/useGameStore";
import { calculateSinglePlayerWinner, emojis } from "../../../util";
import { PlayerBanner } from "../PlayerBanner/PlayerBanner";
import { PlayArea } from "./Styles";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function PlayerBoard() {
  const { playerSign, board, setBoard, setGameResult } = useSinglePlayer();
  const { gameNavigate, setGameNavigate } = useGameStore();
  const [winner, setWinner] = useState<emojis | null>(null);
  const [isPlayerXNext, setIsPlayerXNext] = useState<boolean>(true);

  useEffect(() => {
    const currentPlayer: emojis = isPlayerXNext ? playerSign! : "🤖";
    if (
      currentPlayer === "🤖" &&
      !winner &&
      gameNavigate === "single-player-board"
    ) {
      simulateRobotMove();
    }
  }, [isPlayerXNext, playerSign, winner, gameNavigate]);

  const handleClick = (index: number) => {
    if (board[index] || winner) {
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
      setGameNavigate("single-player-result");
    } else if (!newBoard.includes(null)) {
      setGameResult("draw");
      setGameNavigate("single-player-result");
    }
  };

  const simulateRobotMove = () => {
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
    }, 1500);
  };

  const renderSquare = (index: number) => {
    const BoxBase = styled(motion.section)`
      border: none;
      height: 150px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 5px;
      font-size: 80px;

      @media screen and (max-width: 500px) {
        height: 120px;
        width: 120px;
      }

      @media screen and (max-width: 420px) {
        height: 90px;
        width: 90px;
        font-size: 50px;
      }
    `;

    const Box = styled(BoxBase)`
      background-color: #c8c8ca;
    `;
    return <Box onClick={() => handleClick(index)}>{board[index]}</Box>;
  };
  return (
    <>
      <PlayerBanner isPlayerXNext={isPlayerXNext} />
      <PlayArea>
        {[0, 1, 2].map((index) => renderSquare(index))}
        {[3, 4, 5].map((index) => renderSquare(index))}
        {[6, 7, 8].map((index) => renderSquare(index))}
      </PlayArea>
    </>
  );
}
