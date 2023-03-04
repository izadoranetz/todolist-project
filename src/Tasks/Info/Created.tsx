import { useState } from 'react';
import styles from './Info.module.css';

export function Created() {
  const [countTasks, setcountTasks] = useState(0);

  return (
    <>
      <span className={styles.legendaCriadas}>
        Tarefas Criadas <span className={styles.contagem}>{countTasks}</span>
      </span>
    </>
  );
}
