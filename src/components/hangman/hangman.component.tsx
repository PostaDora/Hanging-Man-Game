import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { wrongLetters: string[] };

export const Hangman: FC<Props> = ({ height, width, wrongLetters }) => {
  return (
    <svg viewBox="0 0 10 12" height={height} width={width}>
      {wrongLetters.length >= 1 && <path d="M1,11 h8" />}
      {wrongLetters.length >= 2 && <path d="M9,11 v-10" />}
      {wrongLetters.length >= 3 && <path d="M9,1 h-4" />}
      {wrongLetters.length >= 4 && <path d="M9,1 h-4" />}
      {wrongLetters.length >= 5 && <path d="M9,1 h-4" />}
      {wrongLetters.length >= 6 && <path d="M5,1 v2" />}
      {wrongLetters.length >= 7 && <circle cx="5" cy="4" r="1" />}
      {wrongLetters.length >= 8 && <path d="M5,5 v3" />}
      {wrongLetters.length >= 9 && <path d="M5,5 l-2,2" />}
      {wrongLetters.length >= 10 && <path d="M5,5 l-2,2" />}
      {wrongLetters.length >= 11 && <path d="M5,5 l2,2" />}
      {wrongLetters.length >= 12 && <path d="M5,8 l-2,2" />}
      {wrongLetters.length >= 13 && <path d="M5,8 l2,2" />}
    </svg>
  );
};
