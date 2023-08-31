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
