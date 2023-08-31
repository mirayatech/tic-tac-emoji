import styled from "styled-components";
import { colors } from "../../../assets/variables";
import { motion } from "framer-motion";

export const StyledWrapper = styled(motion.div)`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;

export const StyledTitle = styled.div`
  h1 {
    text-align: center;
    font-size: calc(20 / 16 * 1rem);
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const StyledDivider = styled.div<{ $noMarginTop?: boolean }>`
  margin-top: ${($noMarginTop) => ($noMarginTop ? "0" : "20px")};
  padding: 1px;
  background-color: ${colors.grey};
`;

export const Emojis = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-weight: bold;
    font-size: calc(18 / 16 * 1rem);
  }
`;

export const EmojiButton = styled.div<{ $selected: boolean }>`
  font-size: 70px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${(props) => (props.$selected ? "scale(1.05)" : "none")};
  filter: ${(props) =>
    props.$selected ? `drop-shadow( 0 4px 5px rgba(0, 0, 0, 0.158))` : "none"};
  transition: transform 0.3s ease, filter 0.3s ease;
`;

export const Buttons = styled.div`
  gap: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const InteractButton = styled.button`
  height: 45px;
  margin: 0 auto;
  font-weight: bold;
  color: ${colors.white};
  border: none;
  font-size: 1.1rem;
  max-width: 300px;
  width: 100%;
  color: ${colors.white};
  font-size: 1.1rem;
  transition: all 200ms ease-in;
  border-radius: 10px;
  box-shadow: ${colors.shadow};

  &.back-button {
    text-shadow: 0px -2px #8956f1;
    background-color: #a081ff;
    border-bottom: 4px solid #8956f1;
  }

  &.play-button {
    text-shadow: 0px -2px #232229;
    background-color: #3f3f3f;
    border-bottom: 4px solid #232229;
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 2px;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const EmojiTextStyled = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 24px;
  display: block;
  text-align: center;
  margin-top: 8px;
`;
