import { useState } from 'react';
import { NewTask } from './NewTask';
import Header from './Header';
import { Tasks } from './Tasks';

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleNewTask(task: string) {
    setTaskList([...taskList, task]);
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