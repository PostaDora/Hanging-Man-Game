import { getRandomWord } from "@/pages/game/getRandomWord.util";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  solution: string;
  guessedLetters: string[];
  wrongLetters: string[];
};

type Actions = {
  generateSolution: (wordLength?: number) => void;
  updateGuessedLetters: (letter: string) => void;
  updateWrongLetters: (letter: string) => void;
  reset: () => void;
};

const initialState: State = {
  solution: "",
  guessedLetters: [],
  wrongLetters: [],
};

export const useGameStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,

      generateSolution: (wordLength) => {
        const solution = getRandomWord(wordLength);
        set({ solution });
      },
      updateGuessedLetters: (letter) => {
        const { guessedLetters } = get();
        set({ guessedLetters: [...guessedLetters, letter] });
      },
      updateWrongLetters: (letter) => {
        const { wrongLetters } = get();
        set({ wrongLetters: [...wrongLetters, letter] });
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "game-storage",
    }
  )
);
