import { useState } from 'react';

import styles from './NewTask.module.css';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface NewTaskProps {
  onAddTask: (newTask: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState<string>('');

  function handleAddTask() {
    if (newTask.trim()) { 
      onAddTask(newTask);
      setNewTask('');
    }
  }

  return (
    <div className={styles.container}>
      <Input value={newTask} onChange={(event) => setNewTask(event.target.value)} />
      <Button onClick={handleAddTask} />
    </div>
  )
}

