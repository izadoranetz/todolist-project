import { useState } from "react";

export function Created() {
const [count, setCount] = useState(0);

    return (
        <span>Tarefas Criadas {count}</span>
    )
}