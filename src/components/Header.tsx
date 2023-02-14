import logo from '../assets/todo-logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="todo list" />
    </header>
  );
};

export default Header;