import { Task } from '../../components/Task';
import styles from './List.module.css';

interface ListProps {
  taskList: string[];
  onCreate: () => void;
  onTaskComplete: (newChecked: boolean) => void;
  onTaskRemove: (index: number) => void;
  isChecked: boolean;
}
export function List({
  taskList,
  onCreate,
  onTaskComplete,
  onTaskRemove,
  isChecked
}: ListProps) {
  return (
    <div className={styles.container}>
      {taskList.map((task, index) => (
        <Task
        key={index}
        description={task}
        index={index}
        onRemove={onTaskRemove}
        onTaskComplete={onTaskComplete}
        isChecked={isChecked} // Passa o estado atual do Checkbox
      />
      ))}
    </div>
  );
}
