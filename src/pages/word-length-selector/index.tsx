import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./wordLengthSelector.module.scss";
import { LetterButton } from "@/components/letterButton/letterButton.component";
import { GameButton } from "@/components/gameButton/gameButton.component";

export default function Home() {
  const [wordLengthButton, setWordLengthButton] = useState("");
  const router = useRouter();

  const wordLengthArray = ["3", "4", "5", "7", "8", "9", "Random"];

  return (
    <main className={styles.container}>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <p className={styles.text}>Lets play Hangman!</p>
      <p className={styles.text}>How many letters do you want in your word?</p>
      <div className={styles.lengthButtonContainer}>
        {wordLengthArray.map((wordLength) => (
          <LetterButton
            key={wordLength}
            onclick={() => setWordLengthButton(wordLength)}
            className={styles.letterButton}
          >
            {wordLength}
          </LetterButton>
        ))}
      </div>
      <GameButton
        onclick={() => router.push(`/game/${wordLengthButton}/`)}
        className={styles.gameButton}
      >
        Lets play
      </GameButton>
    </main>
  );
}
