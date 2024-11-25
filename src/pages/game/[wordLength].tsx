import { GameButton } from "@/components/gameButton/gameButton.component";
import { useGameStore } from "@/store/game.store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import styles from "./game.module.scss";
import { Letters } from "@/components/letters/letters.component";
import { Solution } from "@/components/solution/solution.component";
import { Hangman } from "@/components/hangman/hangman.component";
import { Message } from "@/components/message/message.component";

export default function Game() {
  const router = useRouter();
  const { guessedLetters, solution, generateSolution, wrongLetters, reset } =
    useGameStore(
      useShallow((state) => ({
        guessedLetters: state.guessedLetters,
        solution: state.solution,
        generateSolution: state.generateSolution,
        wrongLetters: state.wrongLetters,
        reset: state.reset,
      }))
    );

  const selectedNumber = router.query.wordLength;

  useEffect(() => {
    const isNumber =
      typeof selectedNumber === "string" && !isNaN(parseInt(selectedNumber));
    generateSolution(isNumber ? parseInt(selectedNumber) : undefined);

    return () => {
      reset();
    };
  }, [generateSolution, selectedNumber]);

  return (
    <main className={styles.container}>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <div className={styles.hangmanContainer}>
        <Hangman width={100} height={100} wrongLetters={wrongLetters.length} />
        <Message
          wrongLetters={wrongLetters.length}
          solution={solution}
          guessedLetters={guessedLetters}
        />
      </div>
      <Solution />
      <p className={styles.subtitle}>Play with a word</p>
      <Letters />
      <GameButton
        className={styles.newGameButton}
        onclick={() => {
          router.push(`/`);
        }}
      >
        Start new game
      </GameButton>
    </main>
  );
}
