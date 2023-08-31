import { useGameStore, useSinglePlayer } from "../../../util";

export default function Result() {
  const { gameResult, reset } = useSinglePlayer();
  const { setNavigate, setGameNavigate } = useGameStore();

  const handleOnHomeClick = () => {
    setNavigate("start");
    setGameNavigate("");
    reset();
  };

  const handleOnResetClick = () => {
    reset();
    setGameNavigate("select-box");
  };
  return (
    <div className="result">
      {gameResult === "win" && <p>You Win!</p>}
      {gameResult === "lose" && <p>You Lost!</p>}
      {gameResult === "draw" && <p>It's a Draw!</p>}

      <div>
        <button onClick={handleOnResetClick}>Reset</button>

        <button onClick={handleOnHomeClick}>Home</button>
      </div>
    </div>
  );
}
