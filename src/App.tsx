import { useState } from 'react';
import { NewTask } from './NewTask';
import Header from './Header';
import { Tasks } from './Tasks';

interface TaskItem {
  id: string;
  description: string;
}

function App() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);

  function handleNewTask(task: TaskItem) {
    setTaskList(prevTaskList => [...prevTaskList, task]);

    console.log([...taskList, task]);
  }
  return (
    <>
      <Header />
      <NewTask onAddTask={handleNewTask} />
      <Tasks taskList={taskList} />
    </>
  )
}

export default App;