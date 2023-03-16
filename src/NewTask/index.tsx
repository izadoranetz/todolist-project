import { Button } from "../components/Button";
import { Input } from "../components/Input";
import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div className={styles.container}>
            <Input />
            <Button />
        </div>
    )
}