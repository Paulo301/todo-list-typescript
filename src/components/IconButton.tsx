import { ButtonHTMLAttributes } from "react";

import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <button {...rest} className={styles.container}>
      {children}
    </button>
  );
}
