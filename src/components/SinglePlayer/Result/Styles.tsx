import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const Card = styled.div`
  width: 300px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};

  @media screen and (min-width: 500px) {
    width: 450px;
  }
`;

export const Emoji = styled.span`
  text-align: center;
  font-size: calc(50 / 16 * 1rem);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: calc(28 / 16 * 1rem);
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Button = styled.button<{ $isMulti?: boolean }>`
  height: 50px;
  width: 100%;
  font-weight: bold;
  color: white;
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

  text-shadow: ${({ $isMulti }) =>
    $isMulti ? "0px -2px #366cc9" : `0px -2px #232229`};
  background: ${({ $isMulti }) => ($isMulti ? "#5389e6" : "#3f3f3f")};
  border-bottom: ${({ $isMulti }) =>
    $isMulti ? `4px solid #366cc9` : `4px solid #232229`};

  @media screen and (max-width: 500px) {
    font-size: 1.05rem;
    width: 80%;
  }
`;
