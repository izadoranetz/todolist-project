import { useState } from 'react';
import styles from './Info.module.css';

export function Done() {
  const [countDone, setCountDone] = useState(0);
  const [countTasks, setcountTasks] = useState(0);
  
  return (
    <span className={styles.legendaConcluidas}>
      Tarefas Concluídas 
      <span className={styles.contagem}>{countDone} de {countTasks}</span>
    </span>
  );
}
