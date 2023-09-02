import { create } from "zustand";
import { persist } from "zustand/middleware";
import { emojis } from "./types";

type SinglePlayerState = {
  isHardMode: boolean;
  gameResult: "win" | "lose" | "draw" | null;
  playerSign: emojis | null;
  board: Array<emojis | null>;
  setPlayerSign: (value: emojis | null) => void;
  setBoard: (value: Array<emojis | null>) => void;
  setGameResult: (value: "win" | "lose" | "draw" | null) => void;
  setIsHardMode: (value: boolean) => void;
  reset: () => void;
};

export const useSinglePlayer = create<SinglePlayerState>()(
  persist(
    (set) => ({
      playerSign: null,
      board: Array(9).fill(null),
      gameResult: null,
      isHardMode: false,
      setPlayerSign: (val) => set({ playerSign: val }),
      setBoard: (val) => set({ board: val }),
      setGameResult: (val) => set({ gameResult: val }),
      setIsHardMode: (val) => set({ isHardMode: val }),
      reset: () => {
        set({
          playerSign: null,
          board: Array(9).fill(null),
          gameResult: null,
        });
      },
    }),
    {
      name: "single-game-storage",
    }
  )
);
