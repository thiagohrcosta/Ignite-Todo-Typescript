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

      <div className={styles.tasksInformation}>
        <p>Tarefas criadas: <span>0</span></p>
        <p>Tarefas concluídas: <span>0</span></p>
      </div>

      <div className={styles.tasksList}>

      </div>
    </div>
  )
}
