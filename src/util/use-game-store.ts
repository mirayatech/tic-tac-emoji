import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  navigate: string;
  gameNavigate: string;
  playerSign: "X" | "O" | null;
  playerTurn: boolean;
  board: ("X" | "O" | null)[];
  winner: "X" | "O" | "draw" | null;
  setNavigate: (value: string) => void;
  setGameNavigate: (value: string) => void;

  setPlayerSign: (value: "X" | "O" | null) => void;
  setBox: (index: number, sign: "X" | "O" | null) => void;
  setWinner: (value: "X" | "O" | "draw" | null) => void;
  setPlayerTurn: (value: boolean) => void;
  botMove: () => void;
  resetSinglePlayer: () => void;
  reset: () => void;
};

export const useGameStore = create<GameStateType>()(
  persist(
    (set) => ({
      navigate: "start",
      gameNavigate: "select-box",

      playerSign: null,
      playerTurn: true,
      board: Array(9).fill(null),
      winner: null,
      setNavigate: (val) => set(() => ({ navigate: val })),
      setGameNavigate: (val) => set(() => ({ gameNavigate: val })),

      setPlayerSign: (val) => set({ playerSign: val }),
      setBox: (index, sign) =>
        set((state) => {
          const newBoard = [...state.board];
          newBoard[index] = sign;
          return { board: newBoard };
        }),
      setWinner: (val) => set({ winner: val }),
      setPlayerTurn: (val) => set({ playerTurn: val }),
      botMove: () =>
        set((state) => {
          const availableGridCells = state.board
            .map((value, index) => (value === null ? index : null))
            .filter((index): index is number => index !== null);

          if (availableGridCells.length > 0) {
            setTimeout(() => {
              const randomBoardCell =
                availableGridCells[
                  Math.floor(Math.random() * availableGridCells.length)
                ];
              const botSign = state.playerSign === "X" ? "O" : "X";

              set((state) => {
                const updatedBoard = [...state.board];
                updatedBoard[randomBoardCell] = botSign;
                return { board: updatedBoard };
              });

              set({ playerTurn: true });
            }, 1000);
          }

          return state;
        }),

      resetSinglePlayer: () =>
        set({
          playerSign: null,
          board: Array(9).fill(null),
          winner: null,
          navigate: "single-player",
          gameNavigate: "select-box",
          playerTurn: true,
        }),
      reset: () =>
        set({
          playerSign: null,
          board: Array(9).fill(null),
          winner: null,
          navigate: "start",
          gameNavigate: "select-box",
          playerTurn: true,
        }),
    }),
    {
      name: "game-storage",
    }
  )
);
