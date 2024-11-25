import { GameButton } from "@/components/gameButton/gameButton.component";
import { Hangman } from "@/components/hangman/hangman.component";
import router from "next/router";
import { FC } from "react";
import styles from "./home.module.scss";

const GameDescription: FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.cardTitle}>The Hangman</h1>
      <Hangman width="auto" height="20vh"></Hangman>
      <h2 className={styles.gameInstructionTitle}>
        The game&apos;s objective:
      </h2>
      <p className={styles.gameInstruction}>
        The goal of Hangman is for the guessing player to figure out a secret
        word or phrase by guessing one letter at a time before running out of
        attempts.
      </p>
      <GameButton
        onclick={() => router.push(`/word-length-selector`)}
        className={styles.gotItButton}
      >
        Got it!
      </GameButton>
    </main>
  );
};
export default GameDescription;
