import { useCallback, useState } from "react";
import styles from "./NewTask.module.css";

import { PlusCircle } from "@phosphor-icons/react";

interface NewTaskProps {
  onAddNewTask: (text: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleClickAddNewTask = useCallback(() => {
    onAddNewTask(newTaskText);
  }, [newTaskText]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.currentTarget.value)}
        className={styles.input}
      />
      <button onClick={handleClickAddNewTask}>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
