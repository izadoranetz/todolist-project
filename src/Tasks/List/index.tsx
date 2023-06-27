import { TaskItem } from '..';
import { Task } from '../../components/Task';
import styles from './List.module.css';

interface ListProps {
  taskList: TaskItem[];
  onCreate: () => void;
  onTaskComplete: (newChecked: boolean) => void;
  onTaskRemove: (id: string) => void;
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
      {taskList.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          id={task.id}
          onRemove={onTaskRemove}
          onTaskComplete={onTaskComplete}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}
