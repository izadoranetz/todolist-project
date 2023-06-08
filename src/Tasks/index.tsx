import { useEffect, useState } from 'react';
import { Empty } from './Empty';
import { Created } from './Info/Created';
import { Done } from './Info/Done';
import { List } from './List';
import styles from './Tasks.module.css';

interface Props {
  taskList: string[];
}

export function Tasks({ taskList }: Props) {
  const [countTasks, setCountTasks] = useState(taskList.length);

  const handleTaskCreate = () => {
    setCountTasks(prevCount => prevCount + 1);
  };

  useEffect(() => {
    setCountTasks(taskList.length);
  }, [taskList]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Created tasksNumber={countTasks} />
        <Done tasksNumber={countTasks} />
      </header>
      <section className={styles.list}>
        {taskList.length > 0 ? (
          <List taskList={taskList} onCreate={handleTaskCreate} />
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}


