import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameStateType = {
  navigate: string;
  gameNavigate: string;

  setNavigate: (value: string) => void;
  setGameNavigate: (value: string) => void;
};

export const useGameStore = create<GameStateType>()(
  persist(
    (set) => ({
      navigate: "start",
      gameNavigate: "select-box",
      setNavigate: (val) => set(() => ({ navigate: val })),
      setGameNavigate: (val) => set(() => ({ gameNavigate: val })),
    }),
    {
      name: "game-storage",
    }
  )
);
