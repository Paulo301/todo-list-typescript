import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { Task as TaskType } from "../App";
import { IconButton } from "./IconButton";

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.container}>
      <IconButton style={{ color: "var(--blue)" }}>
        {task.isFinished ? <CheckCircle size={20} /> : <Circle size={20} />}
      </IconButton>

      <p>{task.text}</p>

      <IconButton style={{ color: "var(--gray-300)" }}>
        <Trash size={20} />
      </IconButton>
    </div>
  );
}
