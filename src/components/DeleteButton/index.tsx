import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Trash />
    </button>
  );
}
