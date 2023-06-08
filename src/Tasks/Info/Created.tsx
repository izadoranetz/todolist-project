import { useState } from 'react';
import styles from './Info.module.css';

interface CreatedProps {
  tasksNumber: number;
}

export function Created({ tasksNumber }: CreatedProps) {
  return (
    <>
      <span className={styles.legendaCriadas}>
        Tarefas Criadas <span className={styles.contagem}>{tasksNumber}</span>
      </span>
    </>
  );
}
