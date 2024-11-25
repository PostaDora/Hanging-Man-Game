import { useGameStore } from "@/store/game.store";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import { LetterButton } from "../letterButton/letterButton.component";
import styles from "./letters.module.scss";
import { letters } from "@/letters";

export const Letters = () => {
  const { solution, guessedLetters, updateGuessedLetters, updateWrongLetters } =
    useGameStore(
      useShallow((state) => ({
        solution: state.solution,
        guessedLetters: state.guessedLetters,
        updateGuessedLetters: state.updateGuessedLetters,
        updateWrongLetters: state.updateWrongLetters,
      }))
    );

  const [selectedLetters, setSelectedLetters] = useState(guessedLetters);

  return (
    <div className={styles.lettersContainer}>
      {letters.map((letter) => (
        <LetterButton
          key={letter}
          className={styles.letterButton}
          disabled={guessedLetters.includes(letter.toLowerCase())}
          onclick={() => {
            updateGuessedLetters(letter.toLowerCase());
            setSelectedLetters([...selectedLetters, letter.toLowerCase()]);
            if (!solution.includes(letter.toLowerCase())) {
              updateWrongLetters(letter.toLowerCase());
            }
          }}
        >
          {letter}
        </LetterButton>
      ))}
    </div>
  );
};
