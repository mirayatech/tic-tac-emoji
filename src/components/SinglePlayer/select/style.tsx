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
  width: 320px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  @media screen and (min-width: 500px) {
    width: 450px;
    padding: 20px;
  }
`;

export const StyledTitle = styled.div`
  h1 {
    text-align: center;
    font-size: calc(20 / 16 * 1rem);
    font-weight: 700;
    margin-bottom: 10px;
    border-bottom: 1px solid ${colors.grey};

    @media screen and (min-width: 500px) {
      font-size: calc(24 / 16 * 1rem);
    }
  }
`;

export const Emojis = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-weight: bold;
    font-size: calc(24 / 16 * 1rem);
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

export const EmojiTextStyled = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 24px;
  display: block;
  text-align: center;
  margin-top: 8px;
`;
