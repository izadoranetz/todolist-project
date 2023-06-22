import { useEffect, useState } from 'react';
import styles from './Info.module.css';

interface DoneProps {
  tasksNumber: number;
  countDone: number;
}

export function Done({tasksNumber, countDone}:DoneProps) {
  
  return (
    <span className={styles.legendaConcluidas}>
      Tarefas Concluídas 
      <span className={styles.contagem}>{countDone} de {tasksNumber}</span>
    </span>
  );
}
