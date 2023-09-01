import React, { useEffect } from "react";
import { useGameStore } from "../../util/useGameStore";
import Result from "./Result";
import { PlayerBanner } from "./PlayerBanner";
import useMultiplayerStore from "../../util/useMultiplayerStore";
import { PlayArea } from "../SinglePlayer/PlayBoard/Styles";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function PlayerBoard() {
  const { setGameNavigate, gameNavigate } = useGameStore();
  const {
    multiplayerBoard,
    multiplayerWinner,
    multiplayerHandleClick,
    emojiX,
    emojiO,
    multiplayerPlayerXIsNext,
  } = useMultiplayerStore();

  const isDraw = multiplayerBoard.every((square) => square !== null);

  useEffect(() => {
    if (multiplayerWinner || isDraw) {
      setGameNavigate("multi-player-result");
    }
  }, [multiplayerWinner, isDraw]);

  const BoxBase = styled(motion.section)`
    border: none;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  const renderSquare = (index: number) => (
    <Box className="square" onClick={() => multiplayerHandleClick(index)}>
      {multiplayerBoard[index]}
    </Box>
  );

  return (
    <>
      {gameNavigate === "multi-player-result" && <Result />}

      <PlayerBanner
        isPlayerXNext={multiplayerPlayerXIsNext}
        playerSign={emojiX}
        otherPlayerSign={emojiO}
      />
      <PlayArea>
        {[0, 1, 2].map((row) => (
          <React.Fragment key={row}>
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </React.Fragment>
        ))}
      </PlayArea>
    </>
  );
}
