import { StyledContainer } from "./Styles";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledContainer>
  );
}
