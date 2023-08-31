import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const PlayArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};

  @media screen and (max-width: 500px) {
    padding: 10px;
    border-radius: 5px;
  }
`;
