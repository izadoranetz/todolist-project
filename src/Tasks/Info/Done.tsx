import { useState } from "react";

export function Done() {
const [countDone, setCountDone] = useState(0);

    return (
        <span>Tarefas Concluídas {countDone} de 00</span>
    )
}