import { Divider } from "./Divider";
import { ProgressIndicator } from "./ProgressIndicator";
import styles from "./TasksContainer.module.css";

interface TasksContainerProps {}

export function TasksContainer({}: TasksContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tasksProgress}>
        <ProgressIndicator name="Tarefas criadas" value="0" />
        <ProgressIndicator name="Concluídas" value="0" />
      </div>

      <Divider />

      <div></div>
    </div>
  );
}
