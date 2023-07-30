import { motion } from "framer-motion";
import styled from "styled-components";

import { colors } from "../../assets/variables";

type ButtonProps = {
  isMulti?: boolean;
};

export const Wrapper = styled(motion.div)`
  height: 100%;
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  filter: drop-shadow(5px 5px 5px #22222245);
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

export const Button = styled.button<ButtonProps>`
  height: 50px;

  font-weight: bold;
  color: ${colors.white};
  border: none;
  font-size: 1.1rem;

  width: 160px;
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

  @media screen and (max-width: 500px) {
    font-size: 1.05rem;
    width: 80%;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  margin-top: auto;
`;

export const FooterLink = styled.a`
  color: ${colors.grey};

  &:hover {
    text-decoration: underline;
  }
`;
