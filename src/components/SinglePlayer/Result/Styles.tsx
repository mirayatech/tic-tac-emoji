import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const Card = styled.div`
  width: 300px;
  gap: 25px;
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
