import { Empty } from './Empty';
import { Created } from './Info/Created';
import { Done } from './Info/Done';
import { List } from './List';
import styles from './Tasks.module.css';

interface Props {
  taskList: string[];
}

export function Info({ taskList }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Created />
        <Done />
      </header>
      <section className={styles.list}>
        {taskList.length > 0 ? (
          <List taskList={taskList} />
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}
