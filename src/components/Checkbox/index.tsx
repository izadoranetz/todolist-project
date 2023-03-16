import { Check } from 'phosphor-react';
import styles from './Checkbox.module.css';
import { useState } from 'react';

interface CheckboxProps {
    onChange: (isChecked: boolean) => void;
  }
  
  export function Checkbox({ onChange }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxClick = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange(newChecked);
    };

  return (
    <>
       <div className={`${styles.checkbox} ${isChecked ? styles.checked : styles.unchecked}`} onClick={handleCheckboxClick}>
        <Check size={12} />
      </div>
    </>
  );
}
