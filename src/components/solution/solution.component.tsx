import { useGameStore } from "@/store/game.store";
import styles from "./solution.module.scss";
import { useShallow } from "zustand/shallow";

export const Solution = () => {
  const { solution, guessedLetters } = useGameStore(
    useShallow((state) => ({
      guessedLetters: state.guessedLetters,
      solution: state.solution,
    }))
  );

  const wasLetterGuessed = (letter: string) => guessedLetters.includes(letter);

  return (
    <div className={styles.solution}>
      {solution.split("").map((letter, index: number) => (
        <div key={index} className={styles.letter}>
          {wasLetterGuessed(letter) ? letter : undefined}
        </div>
      ))}
    </div>
  );
};
