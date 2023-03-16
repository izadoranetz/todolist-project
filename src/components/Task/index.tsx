import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { Checkbox } from '../Checkbox';

interface TaskProps {
  description: string;
}

export function Task({ description }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleCheckboxChange} />
      <p className={`${styles.description} ${isChecked ? styles.done : ''}`}>{description}</p>
      <Trash />
    </div>
  );
}
