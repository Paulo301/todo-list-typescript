import { Task } from "../App";
import { Divider } from "./Divider";
import { EmptyTasks } from "./EmptyTasks";
import { ProgressIndicator } from "./ProgressIndicator";
import { Task as TaskComponent } from "./Task";
import styles from "./TasksContainer.module.css";

interface TasksContainerProps {
  tasks: Task[];
}

export function TasksContainer({ tasks }: TasksContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tasksProgress}>
        <ProgressIndicator name="Tarefas criadas" value="0" />
        <ProgressIndicator name="Concluídas" value="0" nameColor="purple" />
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => <TaskComponent />)
      ) : (
        <>
          <Divider style={{ marginTop: "1.5rem" }} />

          <EmptyTasks />
        </>
      )}
    </div>
  );
}
