import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./wordLengthSelector.module.scss";
import { LetterButton } from "@/components/letterButton/letterButton.component";
import { GameButton } from "@/components/gameButton/gameButton.component";
import clsx from "clsx";

export default function Home() {
  const [selectedWordLength, setSelectedWordLength] = useState("");
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
            className={clsx(
              selectedWordLength === wordLength && styles.letterButton
            )}
            key={wordLength}
            onclick={() => {
              setSelectedWordLength(wordLength);
            }}
          >
            {wordLength}
          </LetterButton>
        ))}
      </div>
      <GameButton
        onclick={() => router.push(`/game/${selectedWordLength}/`)}
        className={styles.gameButton}
        disabled={!selectedWordLength}
      >
        Lets play
      </GameButton>
    </main>
  );
}
