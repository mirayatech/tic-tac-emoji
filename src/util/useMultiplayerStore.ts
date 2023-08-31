import create from "zustand";
import { checkMultiPlayerWinner } from ".";

type MultiplayerStateType = {
  multiplayerBoard: ("X" | "O" | null)[];
  multiplayerPlayerXIsNext: boolean;
  multiplayerWinner: "X" | "O" | "draw" | null;
  multiplayerHandleClick: (index: number) => void;
  reset: () => void;
};

const useMultiplayerStore = create<MultiplayerStateType>((set) => ({
  multiplayerBoard: Array(9).fill(null),
  multiplayerPlayerXIsNext: true,
  multiplayerWinner: null,
  multiplayerHandleClick: (index) =>
    set((state) => {
      if (state.multiplayerWinner || state.multiplayerBoard[index]) {
        return state;
      }
      const newBoard = [...state.multiplayerBoard];

      newBoard[index] = state.multiplayerPlayerXIsNext ? "X" : "O";

      const winner = checkMultiPlayerWinner(newBoard);

      return {
        multiplayerBoard: newBoard,
        multiplayerPlayerXIsNext: !state.multiplayerPlayerXIsNext,
        multiplayerWinner: winner,
      };
    }),
  reset: () =>
    set({
      multiplayerBoard: Array(9).fill(null),
      multiplayerPlayerXIsNext: true,
      multiplayerWinner: null,
    }),
}));

export default useMultiplayerStore;
