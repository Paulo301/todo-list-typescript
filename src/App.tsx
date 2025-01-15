import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksContainer } from "./components/TasksContainer";
import { useCallback } from "react";

let tasks: Task[] = [
  {
    isFinished: false,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    isFinished: true,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

export type Task = {
  text: string;
  isFinished: boolean;
};

export function App() {
  const handleAddNewTask = useCallback((text: string) => {
    tasks.push({ text, isFinished: false });
  }, []);

  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTask onAddNewTask={handleAddNewTask} />
        <TasksContainer tasks={tasks} />
      </main>
    </>
  );
}
