import create from "zustand";
import { checkMultiPlayerWinner, getRandomEmoji } from ".";

type MultiplayerStateType = {
  multiplayerBoard: ("X" | "O" | null)[];
  multiplayerPlayerXIsNext: boolean;
  multiplayerWinner: "X" | "O" | "draw" | null;
  multiplayerHandleClick: (index: number) => void;
  reset: () => void;
  emojiX: string;
  emojiO: string;
};

const useMultiplayerStore = create<MultiplayerStateType>((set) => {
  const emojiX = getRandomEmoji();
  const emojiO = getRandomEmoji();

  return {
    multiplayerBoard: Array(9).fill(null),
    multiplayerPlayerXIsNext: true,
    multiplayerWinner: null,
    emojiX,
    emojiO,
    multiplayerHandleClick: (index) =>
      set((state) => {
        if (state.multiplayerWinner || state.multiplayerBoard[index]) {
          return state;
        }
        const newBoard = [...state.multiplayerBoard];
        const emoji = state.multiplayerPlayerXIsNext
          ? state.emojiX
          : state.emojiO;

        newBoard[index] = emoji as any; // for now, we'll just ignore the type error

        const winner = checkMultiPlayerWinner(newBoard);

        return {
          multiplayerBoard: newBoard,
          multiplayerPlayerXIsNext: !state.multiplayerPlayerXIsNext,
          multiplayerWinner: winner,
          emojiX: state.emojiX,
          emojiO: state.emojiO,
        };
      }),
    reset: () =>
      set(() => ({
        multiplayerBoard: Array(9).fill(null),
        multiplayerPlayerXIsNext: true,
        multiplayerWinner: null,
        emojiX: getRandomEmoji(),
        emojiO: getRandomEmoji(),
      })),
  };
});

export default useMultiplayerStore;
