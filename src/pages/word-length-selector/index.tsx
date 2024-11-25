import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./wordLengthSelector.module.scss";
import { LetterButton } from "@/components/letterButton/letterButton.component";
import { GameButton } from "@/components/gameButton/gameButton.component";
import clsx from "clsx";
import { getWordLength } from "./getWordLength.util";

export default function WordLengthChooser() {
  const [selectedWordLength, setSelectedWordLength] = useState("");
  const router = useRouter();

  return (
    <main className={styles.container}>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <p className={styles.text}>Let&apos;s play Hangman!</p>
      <p className={styles.text}>How many letters do you want in your word?</p>
      <div className={styles.lengthButtonContainer}>
        {getWordLength().map((wordLength) => (
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
        <LetterButton
          className={clsx(
            selectedWordLength === "random" && styles.letterButton
          )}
          key="random"
          onclick={() => {
            setSelectedWordLength("random");
          }}
        >
          Random
        </LetterButton>
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
