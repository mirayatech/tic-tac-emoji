import create from "zustand";
import { checkMultiPlayerWinner, getRandomEmoji } from ".";

const localStorageKey = "multiplayer-game-data";

type MultiplayerStateType = {
  multiplayerBoard: ("X" | "O" | null)[];
  multiplayerPlayerXIsNext: boolean;
  multiplayerWinner: "X" | "O" | "draw" | null;
  multiplayerHandleClick: (index: number) => void;
  reset: () => void;
  emojiX: string;
  emojiO: string;
  saveGame: () => void;
  clearGame: () => void;
};

const useMultiplayerStore = create<MultiplayerStateType>((set) => {
  const storedGameData = localStorage.getItem(localStorageKey);
  const initialState = storedGameData
    ? JSON.parse(storedGameData)
    : {
        multiplayerBoard: Array(9).fill(null),
        multiplayerPlayerXIsNext: true,
        multiplayerWinner: null,
        emojiX: getRandomEmoji(),
        emojiO: getRandomEmoji(),
      };

  return {
    ...initialState,
    multiplayerHandleClick: (index) =>
      set((state: any) => {
        // for now, we'll just ignore the type error
        if (state.multiplayerWinner || state.multiplayerBoard[index]) {
          return state;
        }
        const newBoard = [...state.multiplayerBoard];
        const emoji = state.multiplayerPlayerXIsNext
          ? state.emojiX
          : state.emojiO;

        newBoard[index] = emoji as any; // for now, we'll just ignore the type error

        const winner = checkMultiPlayerWinner(newBoard);

        const newState = {
          ...state,
          multiplayerBoard: newBoard,
          multiplayerPlayerXIsNext: !state.multiplayerPlayerXIsNext,
          multiplayerWinner: winner,
        };

        localStorage.setItem(localStorageKey, JSON.stringify(newState));

        return newState;
      }),
    reset: () => {
      localStorage.removeItem(localStorageKey);
      set({
        multiplayerBoard: Array(9).fill(null),
        multiplayerPlayerXIsNext: true,
        multiplayerWinner: null,
        emojiX: getRandomEmoji(),
        emojiO: getRandomEmoji(),
      });
    },
    saveGame: () => {
      const stateToSave = {
        multiplayerBoard: initialState.multiplayerBoard,
        multiplayerPlayerXIsNext: initialState.multiplayerPlayerXIsNext,
        multiplayerWinner: initialState.multiplayerWinner,
        emojiX: initialState.emojiX,
        emojiO: initialState.emojiO,
      };
      localStorage.setItem(localStorageKey, JSON.stringify(stateToSave));
    },
    clearGame: () => {
      localStorage.removeItem(localStorageKey);
    },
  };
});

export default useMultiplayerStore;
