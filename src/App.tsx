import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksContainer } from "./components/TasksContainer";

export type Task = {
  text: string;
  isFinished: boolean;
};

export function App() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTask />
        <TasksContainer tasks={[]} />
      </main>
    </>
  );
}
