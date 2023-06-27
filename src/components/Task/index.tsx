import { useState } from 'react';
import styles from './Task.module.css';
import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';

interface TaskProps {
  description: string;
  onRemove: (id: string) => void;
  onTaskComplete: (newChecked: boolean) => void;
  id: string;
  isChecked: boolean;
}

export function Task({ description, onRemove, onTaskComplete, id }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (newChecked: boolean) => {
    setIsChecked(newChecked);
    onTaskComplete(newChecked);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleChange} isChecked={isChecked} />
      <p className={`${styles.description} ${isChecked ? styles.done : ''}`}>{description}</p>
      <DeleteButton onClick={handleRemove} />
    </div>
  );
}
