import { GameButton } from "@/components/gameButton/gameButton.component";
import { useGameStore } from "@/store/game.store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import styles from "./game.module.scss";
import { Letters } from "@/components/letters/letters.component";
import { Solution } from "@/components/solution/solution.component";
import { Hangman } from "@/components/hangman/hangman.component";

export default function Home() {
  const router = useRouter();
  const { generateSolution, wrongLetters, reset } = useGameStore(
    useShallow((state) => ({
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
  }, [generateSolution, selectedNumber]);

  return (
    <main>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <Hangman width={100} height={100} wrongLetters={wrongLetters.length} />
      <Solution />
      <p>Play with a word</p>
      <Letters />
      <GameButton
        onclick={() => {
          reset();
          router.push(`/`);
        }}
      >
        Start new game
      </GameButton>
    </main>
  );
}
