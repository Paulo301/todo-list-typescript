import styles from "./ProgressIndicator.module.css";

interface ProgressIndicatorProps {
  name: string;
  value: string;
  nameColor?: "blue" | "purple";
}

export function ProgressIndicator({
  name,
  value,
  nameColor = "blue",
}: ProgressIndicatorProps) {
  return (
    <div className={styles.container}>
      <strong
        style={{
          color: nameColor === "blue" ? "var(--blue)" : "var(--purple)",
        }}
      >
        {name}
      </strong>
      <span>{value}</span>
    </div>
  );
}
