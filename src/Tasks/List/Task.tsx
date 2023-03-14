import styles from './Task.module.css';

interface TaskProps {
    description: string;
    done?: boolean;
}

export function Task({description}: TaskProps){
    return (
        <div className={styles.container}>
            Check + {description} + Deletar
        </div>
    )
}