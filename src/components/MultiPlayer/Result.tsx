import { useGameStore } from "../../util/useGameStore";
import useMultiplayerStore from "../../util/useMultiplayerStore";

export default function Result() {
  const { multiplayerWinner, reset } = useMultiplayerStore();
  const { setNavigate, setGameNavigate } = useGameStore();

  const handleOnHomeClick = () => {
    reset();
    setNavigate("start");
    setGameNavigate("");
  };

  const handleOnResetClick = () => {
    reset();
    setGameNavigate("multi-player");
  };

  return (
    <div>
      <div>
        {multiplayerWinner === "draw" ? (
          <h2>It's a draw!</h2>
        ) : (
          <h2>{`Player ${multiplayerWinner} Wins!`}</h2>
        )}
        <div>
          <button onClick={handleOnResetClick}>Reset</button>

          <button onClick={handleOnHomeClick}>Home</button>
        </div>
      </div>
    </div>
  );
}
