import { useState } from 'react';
import styles from './Task.module.css';
import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';

interface TaskProps {
  description: string;
  onRemove: () => void;
  onCreate: () => void;
}

export function Task({ description, onRemove, onCreate  }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    <div className={styles.container}>
      <Checkbox onChange={handleCheckboxChange} />
      <p className={`${styles.description} ${isChecked ? styles.done : ''}`}>{description}</p>
      <DeleteButton onClick={onRemove} />
    </div>
  );
}
