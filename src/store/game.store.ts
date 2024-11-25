import { getRandomWord } from "@/pages/game/getRandomWord.util";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GameState {
  solution: string;
  guessedLetters: string[];

  generateSolution: (wordLength?: number) => void;
  updateGuessedLetters: (letter: string) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      solution: "",
      guessedLetters: [],

      generateSolution: (wordLength) => {
        const solution = getRandomWord(wordLength);
        set({ solution });
      },
      updateGuessedLetters: (letter) => {
        const { guessedLetters } = get();
        set({ guessedLetters: [...guessedLetters, letter] });
      },
    }),
    {
      name: "game-storage",
    }
  )
);
