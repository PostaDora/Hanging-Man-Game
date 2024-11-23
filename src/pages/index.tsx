import { Card } from "@/components/card/card.component";
import { GameButton } from "@/components/gameButton/gameButton.component";
import { Hangman } from "@/components/hangman/hangman.component";
import router from "next/router";
import { FC } from "react";
import styles from "./home.module.scss";

const GameDescription: FC = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1 className={styles.cardTitle}>The Hangman</h1>
        <Hangman width="auto" height="20vh"></Hangman>
        <h2 className={styles.gameInstructionTitle}>Game instruction</h2>
        <p className={styles.gameInstruction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <GameButton
          onclick={() => router.push(`/word-length-selector`)}
          className={styles.gotItButton}
        >
          Got it!
        </GameButton>
      </div>
    </Card>
  );
};
export default GameDescription;
