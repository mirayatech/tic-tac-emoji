import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/variables";

export const Wrapper = styled(motion.div)`
  height: 100%;
  gap: 20px;
`;

export const Square = styled(motion.div)`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: white;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Emoji = styled(motion.span)`
  font-size: 80px;
  rotate: 180deg;
`;

export const Title = styled(motion.h1)`
  font-size: 50px;
  padding: 30px 0;

  span {
    color: white;
    /* Hard to choose which color I should take 😅 */
    /* background: -webkit-linear-gradient(180deg, #ffc800, #ffde83);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  @media screen and (min-width: 500px) {
    font-size: 60px;
  }
`;

export const ButtonsContainer = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Button = styled.button<{ $isMulti?: boolean }>`
  height: 50px;
  width: 100%;
  font-weight: bold;
  color: ${({ $isMulti }) => ($isMulti ? `#4d4d4d` : `  white`)};
  border: none;
  font-size: 1.2rem;
  transition: all 200ms ease-in;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 2px;
  }

  text-shadow: ${({ $isMulti }) => ($isMulti ? "#232229" : `0px -2px #232229`)};
  background: ${({ $isMulti }) => ($isMulti ? "white" : "#3f3f3f")};
  border-bottom: ${({ $isMulti }) =>
    $isMulti ? `4px solid #b7b7b7` : `4px solid #232229`};

  @media screen and (max-width: 500px) {
    font-size: 1.05rem;
    width: 80%;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 30px 0;
  margin-top: auto;
`;

export const FooterLink = styled.a`
  color: ${colors.grey};

  &:hover {
    text-decoration: underline;
  }
`;
