import { Check } from 'phosphor-react';
import styles from './Checkbox.module.css';
import { useState } from 'react';

interface CheckboxProps {
  onChange: (isChecked: boolean) => void;
  isChecked: boolean;
}

export function Checkbox({ onChange, isChecked }: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.checked : styles.unchecked}`}
      onClick={handleCheckboxClick}
    >
      <Check size={12} />
    </div>
  );
}
