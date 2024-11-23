import { ReactNode, type FC } from "react";
import styles from "./card.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  className: string;
}

export const Card: FC<IProps> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
