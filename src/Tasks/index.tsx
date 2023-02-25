import { Created } from './Info/Created';
import { Done } from './Info/Done';
import styles from './Info.module.css';

export function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Created />
        <Done />
      </header>
    </div>
  );
}
