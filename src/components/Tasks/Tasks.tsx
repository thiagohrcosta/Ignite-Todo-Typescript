import { PlusCircle } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks(){
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <input
          className={styles.taskInput}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.btnAddTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
    </div>
  )
}
