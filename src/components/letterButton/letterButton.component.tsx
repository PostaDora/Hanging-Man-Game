import { FC, ReactNode } from "react";
import styles from "./letterButton.module.scss";
import { clsx } from "clsx";

interface IProps {
  className?: string | false;
  children: ReactNode;
  disabled?: boolean;
  onclick: () => void;
}

export const LetterButton: FC<IProps> = ({
  onclick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onclick}
      className={clsx(styles.letterButton, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
