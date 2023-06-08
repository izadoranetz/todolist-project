import { useState } from 'react';
import styles from './Info.module.css';

interface DoneProps {
  tasksNumber: number;
}

export function Done({tasksNumber}:DoneProps) {
  const [countDone, setCountDone] = useState(0);
  
  return (
    <span className={styles.legendaConcluidas}>
      Tarefas Concluídas 
      <span className={styles.contagem}>{countDone} de {tasksNumber}</span>
    </span>
  );
}
