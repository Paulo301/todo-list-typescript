import styles from "./ProgressIndicator.module.css";

interface ProgressIndicatorProps {
  name: string;
  value: string;
}

export function ProgressIndicator({ name, value }: ProgressIndicatorProps) {
  return (
    <div className={styles.container}>
      <strong>{name}</strong>
      <span>{value}</span>
    </div>
  );
}
