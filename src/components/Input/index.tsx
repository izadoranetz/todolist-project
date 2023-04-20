import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  );
}
