import { Created } from './Info/Created';
import { Done } from './Info/Done';
import { List } from './List';
import styles from './Tasks.module.css';

export function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Created />
        <Done />
      </header>
      <section className={styles.list}>
        <List />
      </section>
    </div>
  );
}
