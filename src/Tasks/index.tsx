import { useEffect, useState } from 'react';
import { Empty } from './Empty';
import { Created } from './Info/Created';
import { Done } from './Info/Done';
import { List } from './List';
import styles from './Tasks.module.css';

export interface TaskItem {
  id: string;
  description: string;
}

interface Props {
  taskList: TaskItem[];
}

export function Tasks({ taskList }: Props) {
  // const q cria as tarefa individual
  // inclue o obj tarefa dentro do array de tarefas
  const [countTasks, setCountTasks] = useState(taskList.length);
  const [countDone, setCountDone] = useState(0);

  const handleTaskCreate = () => {
    setCountTasks((prevCount) => prevCount + 1);
    console.log(taskList)
  };


  const handleTaskComplete = (isChecked: boolean) => {
    if (isChecked) {
      setCountDone((prevCount) => prevCount + 1);
    } else {
      setCountDone((prevCount) => prevCount - 1);
    }
  };
  

  const handleTaskRemove = (index: string) => { 
    const updatedTaskList = [...taskList];
    setCountTasks(updatedTaskList.length);
  }

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
            onCreate={handleTaskCreate}
            onTaskComplete={handleTaskComplete}
            onTaskRemove={handleTaskRemove} isChecked={false}       />
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}
