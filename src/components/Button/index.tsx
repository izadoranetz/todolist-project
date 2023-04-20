import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button type="button" onClick={onClick} className={styles.button}><PlusCircle size={16} />
    </button>
  );
}
