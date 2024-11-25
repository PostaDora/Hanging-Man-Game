import { useGameStore } from "@/store/game.store";
import { LetterButton } from "../letterButton/letterButton.component";
import { useState } from "react";
import styles from "./letters.module.scss";
import clsx from "clsx";
import { useShallow } from "zustand/shallow";

export const Letters = () => {
  const { guessedLetters, updateGuessedLetters } = useGameStore(
    useShallow((state) => ({
      guessedLetters: state.guessedLetters,
      updateGuessedLetters: state.updateGuessedLetters,
    }))
  );

  const [selectedLetters, setSelectedLetters] = useState(guessedLetters);

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className={styles.lettersContainer}>
      {letters.map((letter) => (
        <LetterButton
          key={letter}
          className={clsx(
            styles.letterButton,
            guessedLetters.includes(letter) && styles.disabledButton
          )}
          onclick={() => {
            updateGuessedLetters(letter.toLowerCase());
            setSelectedLetters([...selectedLetters, letter.toLowerCase()]);
          }}
        >
          {letter}
        </LetterButton>
      ))}
    </div>
  );
};
