import { useEffect } from 'react';
import { TaskItem } from '..';
import { Task } from '../../components/Task';
import styles from './List.module.css';

interface ListProps {
  taskList: TaskItem[];
  onTaskComplete: (newChecked: boolean) => void;
  onTaskRemove: (id: string) => void;
}

export function List({ taskList, onTaskComplete, onTaskRemove }: ListProps) {
  const handleRemove = (id: string) => {
    onTaskRemove(id);
  };

  return (
    <div className={styles.container}>
      {taskList.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          id={task.id}
          onRemove={handleRemove}
          onTaskComplete={onTaskComplete}
          isCheckedProp={task.isChecked}
        />
      ))}
    </div>
  );
}
