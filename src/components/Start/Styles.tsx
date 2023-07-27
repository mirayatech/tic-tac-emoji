import { motion } from "framer-motion";
import styled from "styled-components";

import { colors } from "../../assets/variables";

type ButtonProps = {
  isMulti?: boolean;
};

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 10px 0;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  min-width: 350px;
  filter: drop-shadow(5px 5px 5px #22222245);
`;

export const Button = styled.button<ButtonProps>`
  height: 50px;

  font-weight: bold;
  color: ${colors.white};
  border: none;
  font-size: 1.1rem;

  width: 200px;
  color: ${colors.white};
  font-size: 1.2rem;
  transition: all 200ms ease-in;
  padding: 5px;

  border-radius: 10px;
  box-shadow: ${colors.shadow};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 2px;
  }

  text-shadow: ${({ isMulti }) =>
    isMulti
      ? `0px -2px ${colors.greenBorder}`
      : `0px -2px ${colors.blueBorder}`};
  background: ${({ isMulti }) => (isMulti ? colors.green : colors.blue)};
  border-bottom: ${({ isMulti }) =>
    isMulti
      ? `4px solid ${colors.greenBorder}`
      : `4px solid ${colors.blueBorder}`};
`;

export const ButtonsContainer = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Footer = styled.footer`
  margin: auto auto 0;
  padding: 20px;
`;

export const FooterLink = styled.a`
  color: ${colors.linkColor};

  &:hover {
    text-decoration: underline;
  }
`;
