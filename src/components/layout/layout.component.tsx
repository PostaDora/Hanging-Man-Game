import { FC, ReactNode } from "react";
import { Card } from "../card/card.component";
import styles from "./layout.module.scss";

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <Card className={styles.layout}>{children}</Card>;
};
