import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { wrongLetters?: number };

export const Hangman: FC<Props> = ({ height, width, wrongLetters }) => {
  const isStrokeAvailable = (index: number) =>
    wrongLetters === undefined || wrongLetters >= index;

  return (
    <svg viewBox="0 0 10 12" height={height} width={width}>
      {isStrokeAvailable(1) && <path d="M1,11 h8" />}
      {isStrokeAvailable(2) && <path d="M9,11 v-10" />}
      {isStrokeAvailable(3) && <path d="M9,1 h-4" />}
      {isStrokeAvailable(4) && <path d="M9,1 h-4" />}
      {isStrokeAvailable(5) && <path d="M9,1 h-4" />}
      {isStrokeAvailable(6) && <path d="M5,1 v2" />}
      {isStrokeAvailable(7) && <circle cx="5" cy="4" r="1" />}
      {isStrokeAvailable(8) && <path d="M5,5 v3" />}
      {isStrokeAvailable(9) && <path d="M5,5 l-2,2" />}
      {isStrokeAvailable(10) && <path d="M5,5 l-2,2" />}
      {isStrokeAvailable(11) && <path d="M5,5 l2,2" />}
      {isStrokeAvailable(12) && <path d="M5,8 l-2,2" />}
      {isStrokeAvailable(13) && <path d="M5,8 l2,2" />}
    </svg>
  );
};
