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
        <ProgressIndicator name="Tarefas criadas" value={`${tasks.length}`} />
        <ProgressIndicator
          name="Concluídas"
          value={
            tasks.length === 0
              ? "0"
              : `${tasks.filter((task) => task.isFinished).length} de ${
                  tasks.length
                }`
          }
          nameColor="purple"
        />
      </div>

      {tasks.length > 0 ? (
        <div className={styles.tasksList}>
          {tasks.map((task) => (
            <TaskComponent task={task} />
          ))}
        </div>
      ) : (
        <>
          <Divider style={{ marginTop: "1.5rem" }} />

          <EmptyTasks />
        </>
      )}
    </div>
  );
}
