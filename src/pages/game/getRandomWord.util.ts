import { words } from "../../words.constant";

export const getRandomWord = (selectedNumber?: number) => {
  const getRandomNumber = (max: number) =>
    Math.floor(Math.random() * (max - 1)) + 1;

  const filteredWords =
    selectedNumber === undefined
      ? words
      : words.filter((word: string) => word.length === selectedNumber);

  const randomNumber = getRandomNumber(filteredWords.length);

  return filteredWords[randomNumber];
};
