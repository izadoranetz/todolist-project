import { Clipboard } from 'phosphor-react';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Clipboard size={56} />
      </div>
      <div className={styles.mensagem}>
        <h3 className={styles.title}>Você ainda não tem tarefas cadastradas</h3>
        <p className={styles.description}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
