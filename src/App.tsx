import { useState } from 'react';
import { NewTask } from './NewTask';
import Header from './Header';
import { TaskItem, Tasks } from './Tasks';

function App() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);

  function handleNewTask(task: TaskItem) {
    setTaskList(prevTaskList => [...prevTaskList, task]);
  }

  function handleTaskListChange(updatedTaskList: TaskItem[]) {
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={handleNewTask} />
      <Tasks taskList={taskList} onTaskListChange={handleTaskListChange} />
    </>
  )
}

export default App;
