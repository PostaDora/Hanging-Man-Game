import { FC } from "react";

interface IProps {
  wrongLetters: number;
  guessedLetters: string[];
  solution: string;
}

export const Message: FC<IProps> = ({
  wrongLetters,
  guessedLetters,
  solution,
}) => {
  const hasUserWon = solution
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const hasUserLost = wrongLetters >= 13;

  const isGameFinished = hasUserLost || hasUserWon;

  if (!isGameFinished) {
    return null;
  }

  return <p>You {hasUserLost ? "lost" : "won"}!</p>;
};
