import { useState } from 'react';

import styles from './NewTask.module.css';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { v4 as uuidv4 } from 'uuid';

interface NewTaskProps {
  onAddTask: (newTask: { description: string; id: string, isChecked: boolean }) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState<string>('');

  function handleAddTask() {
    if (newTask.trim()) { 
      const id = uuidv4();
      const task = {
        description: newTask,
        id: id,
        isChecked: false,
      };
      onAddTask(task);
      setNewTask('');
    }
  }

  return (
    <div className={styles.container}>
      <Input value={newTask} onChange={(event) => setNewTask(event.target.value)} />
      <Button onClick={handleAddTask} />
    </div>
  );
}
