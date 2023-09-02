import { styled } from "styled-components";

export const StyledSpinner = styled.div`
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);

  .spin {
    z-index: 1000;
    color: #ffffff;
    font-size: 4rem;
    position: relative;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
