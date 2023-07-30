import { SpinnerIcon } from "../../assets/icon";
import { StyledSpinner } from "./Style";

export function Spinner() {
  return (
    <StyledSpinner role="alert" aria-label="loading">
      <SpinnerIcon className="spin" />
    </StyledSpinner>
  );
}
