import { words } from "@/words.constant";

export const getWordLength = () => {
  return Array.from(new Set(words.map((word) => word.length.toString())));
};
