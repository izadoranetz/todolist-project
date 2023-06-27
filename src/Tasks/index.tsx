import { useEffect, useState } from 'react';
import { Empty } from './Empty';
import { Created } from './Info/Created';
import { Done } from './Info/Done';
import { List } from './List';
import styles from './Tasks.module.css';

export interface TaskItem {
  id: string;
  description: string;
  isChecked: boolean;
}

interface Props {
  taskList: TaskItem[];
  onTaskListChange: (updatedTaskList: TaskItem[]) => void;
}

export function Tasks({ taskList, onTaskListChange }: Props) {
  const [countTasks, setCountTasks] = useState(taskList.length);
  const [countDone, setCountDone] = useState(0);


  const handleTaskComplete = (newChecked: boolean) => {
    if (newChecked) {
      setCountDone((prevCount) => prevCount + 1);
    } else {
      setCountDone((prevCount) => prevCount - 1);
    }
  };

  const handleTaskRemove = (id: string) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    onTaskListChange(updatedTaskList);
    setCountTasks(updatedTaskList.length);
  };

  useEffect(() => {
    setCountTasks(taskList.length);
  }, [taskList]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Created tasksNumber={countTasks} />
        <Done tasksNumber={countTasks} countDone={countDone} />
      </header>
      <section className={styles.list}>
        {taskList.length > 0 ? (
          <List
            taskList={taskList}
            onTaskComplete={handleTaskComplete}
            onTaskRemove={handleTaskRemove}
          />
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}
