import styled from "styled-components";
import { colors } from "../../../assets/variables";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;

export const Title = styled.div`
  h1 {
    text-align: center;
    font-size: calc(20 / 16 * 1rem);
    font-weight: 700;
  }
`;

export const Divider = styled.div`
  margin-top: 8px;
  padding: 1px;
  background-color: ${colors.grey};
`;

export const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 130px;

  span {
    font-weight: bold;
    font-size: calc(18 / 16 * 1rem);
  }
`;

export const XButton = styled.div<{ selected?: boolean }>`
  font-size: 80px;
  color: ${colors.red};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${(props) => (props.selected ? "scale(1.05)" : "none")};
  filter: ${(props) =>
    props.selected ? `drop-shadow(0 5px 10px ${colors.redShadow})` : "none"};
  transition: transform 0.3s ease, filter 0.3s ease;

  img {
    width: 60px;
  }
`;

export const OButton = styled.div<{ selected?: boolean }>`
  font-size: 92px;
  color: ${colors.yellow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${(props) => (props.selected ? "scale(1.05)" : "none")};
  filter: ${(props) =>
    props.selected ? `drop-shadow(0 5px 10px ${colors.yellowShadow})` : "none"};
  transition: transform 0.3s ease, filter 0.3s ease;
`;

export const Button = styled.button`
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

  &:hover {
    opacity: 0.9;
  }

  &:last-child {
    text-shadow: 0px -2px ${colors.greenBorder};
    background-color: ${colors.green};
    border-bottom: 4px solid ${colors.greenBorder};
  }

  &:first-child {
    text-shadow: 0px -2px ${colors.blueBorder};
    background-color: ${colors.blue};
    border-bottom: 4px solid ${colors.blueBorder};
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 2px;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;
