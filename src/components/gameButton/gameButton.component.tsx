import { FC, ReactNode } from "react";
import styles from "./gameButton.module.scss";
import { clsx } from "clsx";

interface IProps {
  onclick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const GameButton: FC<IProps> = ({
  onclick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onclick}
      className={clsx(styles.gameButton, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
