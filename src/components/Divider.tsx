import { HTMLProps } from "react";
import styles from "./Divider.module.css";

interface DividerProps extends HTMLProps<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ orientation = "horizontal", ...rest }: DividerProps) {
  return (
    <hr
      className={styles.divider}
      style={{
        width: orientation === "horizontal" ? "100%" : "1px",
        height: orientation === "horizontal" ? "1px" : "100%",
      }}
      {...rest}
    />
  );
}
