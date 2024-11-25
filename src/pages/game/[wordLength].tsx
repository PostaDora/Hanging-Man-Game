import { GameButton } from "@/components/gameButton/gameButton.component";
import { useGameStore } from "@/store/game.store";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import styles from "./game.module.scss";
import { Letters } from "@/components/letters/letters.component";
import { Solution } from "@/components/solution/solution.component";

export default function Home() {
  const router = useRouter();
  const generateSolution = useGameStore((state) => state.generateSolution);

  const selectedNumber = router.query.wordLength;

  useEffect(() => {
    const isNumber =
      typeof selectedNumber === "string" && !isNaN(parseInt(selectedNumber));
    generateSolution(isNumber ? parseInt(selectedNumber) : undefined);
  }, [generateSolution, selectedNumber]);

  return (
    <main>
      <button>
        Introductions
        <Image src="rightArrow.svg" alt="Right arrow" width="10" height="10" />
      </button>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <Solution />
      <p>Play with a word</p>
      <Letters />
      <GameButton
        onclick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        End game
      </GameButton>
      <GameButton
        onclick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        Start new game
      </GameButton>
    </main>
  );
}
