import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 500px) {
    padding: 10px;
    border-radius: 5px;
  }
`;

export const BoxBase = styled(motion.section)`
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

export const Box = styled(BoxBase)`
  cursor: pointer;
  background-color: #dedede;
`;
