import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100vh;
`;

export const PlayArea = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colors.lightPurple};
  box-shadow: ${colors.shadow};
`;

const BoxBase = styled(motion.section)`
  border: none;
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
`;

export const Box = styled(BoxBase)`
  background-color: ${colors.middlePurple};
`;

export const WinningBox = styled(BoxBase)`
  * {
    color: ${colors.white};
  }
`;

const PlayerIconBase = styled.div`
  svg {
    font-size: 80px;
  }
`;

export const OPlayer = styled(PlayerIconBase)`
  svg {
    color: ${colors.yellow};
  }
`;

export const XPlayer = styled(PlayerIconBase)`
  svg {
    font-size: 100px;
    color: ${colors.red};
  }
`;

// BANNER

export const ResultBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const PlayerTurnBanner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightPurple};
  padding: 20px;
  border: 10px solid ${colors.lightPurple};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: ${colors.shadow};
`;

export const Slider = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  border-radius: 10px;
  background-color: ${colors.middlePurple};
  transition: left 0.5s ease;
`;

export const PlayerTurnText = styled.div`
  z-index: 1;
  color: ${colors.white};
  margin: auto;
  font-weight: 700;
`;
