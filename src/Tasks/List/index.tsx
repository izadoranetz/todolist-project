import { Task } from "../../components/Task";
import styles from "./List.module.css";

export function List() {
    return (
        <div className={styles.container}>
            <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        </div>
    )
}