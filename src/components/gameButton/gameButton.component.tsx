import { FC, ReactNode } from "react";
import styles from "./gameButton.module.scss";
import { clsx } from "clsx";

interface IProps {
  onclick: () => void;
  children: ReactNode;
  className: string;
}

export const GameButton: FC<IProps> = ({ onclick, children, className }) => {
  return (
    <button onClick={onclick} className={clsx(styles.gameButton, className)}>
      {children}
    </button>
  );
};
