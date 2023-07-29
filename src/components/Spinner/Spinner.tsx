import { SpinnerIcon } from "../../assets/icon";
import "./style.css";

export function Spinner() {
  return (
    <div role="alert" aria-label="loading" className="spinner">
      <SpinnerIcon className="spin" />
    </div>
  );
}
