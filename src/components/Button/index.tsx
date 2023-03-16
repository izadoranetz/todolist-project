import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

export function Button () {
  return (
    <button type="submit" className={styles.button}>Criar <PlusCircle size={16} /></button>
  )
} 