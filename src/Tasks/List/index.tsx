import { Task } from "../../components/Task";
import styles from "./List.module.css";

interface ListProps {
  taskList: string[];
  onCreate: () => void;
}

export function List({ taskList, onCreate }: ListProps) {
  return (
    <div className={styles.container}>
      {taskList.map((task, index) => (
        <Task key={index} description={task} onCreate={onCreate} onRemove={function (): void {
              throw new Error("Function not implemented.");
          } } />
      ))}
    </div>
  )
}