import { Task } from "../../components/Task";
import styles from "./List.module.css";

interface ListProps {
  taskList: string[];
  onCreate: () => void;
  onTaskComplete: () => void;
}
export function List({ taskList, onCreate, onTaskComplete }: ListProps) {
  return (
    <div className={styles.container}>
      {taskList.map((task, index) => (
        <Task key={index} description={task} onRemove={function (): void {
              throw new Error("Function not implemented.");
          } } onTaskComplete={onTaskComplete} />
      ))}
    </div>
  )
}