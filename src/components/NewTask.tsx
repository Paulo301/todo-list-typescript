import styles from "./NewTask.module.css";

import { PlusCircle } from "@phosphor-icons/react";

export function NewTask() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
