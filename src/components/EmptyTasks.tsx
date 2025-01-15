import { Clipboard } from "@phosphor-icons/react";
import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <Clipboard size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
