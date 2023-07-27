import styled from "styled-components";
import { colors } from "../../../assets/variables";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  height: 100vh;
`;

export const Card = styled.div`
  width: 320px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};

  @media screen and (min-width: 390px) {
    width: 350px;
  }

  @media screen and (min-width: 530px) {
    width: 500px;
  }
`;

export const WinImage = styled.img`
  max-width: 140px;
  margin: 25px auto 10px;
`;

export const LoseImage = styled.img`
  max-width: 120px;
  margin: 30px auto 10px;
`;
export const DrawImage = styled.img`
  max-width: 170px;
  margin: 10px auto 0;
`;

export const Title = styled.div`
  h1 {
    text-align: center;
    font-size: calc(20 / 16 * 1rem);
    font-weight: 700;
  }
`;
