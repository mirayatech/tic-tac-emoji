import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const PlayArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};

  @media screen and (max-width: 500px) {
    padding: 10px;

    border-radius: 5px;
  }
`;

const BoxBase = styled(motion.section)`
  border: none;
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    height: 120px;
    width: 120px;
  }

  @media screen and (max-width: 420px) {
    height: 100px;
    width: 100px;
  }

  @media screen and (max-width: 420px) {
    height: 90px;
    width: 90px;
  }
`;

export const Box = styled(BoxBase)`
  background-color: ${colors.lightPurple};
  background-image: linear-gradient(
    to top,
    ${colors.middlePurple},
    ${colors.lightPurple}
  );
`;

export const WinningBox = styled(BoxBase)`
  * {
    color: ${colors.white};
  }
`;

const PlayerIconBase = styled.div``;

export const OPlayer = styled(PlayerIconBase)`
  color: ${colors.yellowSignColor};
  font-size: 92px;
`;

export const XPlayer = styled(PlayerIconBase)`
  color: ${colors.red};
  font-size: 80px;
`;

// BANNER

export const ResultBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const PlayerTurnBanner = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 15px;
  border: 10px solid ${colors.white};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: ${colors.shadow};

  @media screen and (max-width: 500px) {
    padding: 10px;
    border-width: 8px;
    border-radius: 5px;
  }
`;

export const Slider = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  border-radius: 4px;
  background-color: ${colors.lightPurple};
  background-image: linear-gradient(
    to top,
    ${colors.lightPurple},
    ${colors.linkColor}
  );
  transition: left 0.5s ease;
`;

export const PlayerTurnText = styled.div`
  z-index: 1;
  margin: auto;
  font-weight: 900;
  color: ${(props) => props.color || colors.white};

  @media screen and (min-width: 500px) {
    font-size: calc(18 / 16 * 1rem);
  }
`;
