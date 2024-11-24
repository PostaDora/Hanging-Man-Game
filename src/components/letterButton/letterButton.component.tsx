import { FC, ReactNode } from "react";
import styles from "./letterButton.module.scss";
import { clsx } from "clsx";

interface IProps {
  onclick: () => void;
  children: ReactNode;
  className?: string | false;
}

export const LetterButton: FC<IProps> = ({ onclick, children, className }) => {
  return (
    <button onClick={onclick} className={clsx(styles.letterButton, className)}>
      {children}
    </button>
  );
};
