import { ReactNode, type FC } from "react";
import styles from "./card.module.scss";

interface IProps {
  children: ReactNode;
}

export const Card: FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
