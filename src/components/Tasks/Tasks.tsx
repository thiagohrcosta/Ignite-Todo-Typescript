import { PlusCircle, ClipboardText } from "phosphor-react";
import { useState } from "react";
import styles from "./Tasks.module.css";

export function Tasks(){
  const [tasks, setTasks] = useState([]);

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
        {
          tasks.length < 1 ? (
            <div>
              <ClipboardText size={56}  className={styles.taskIcon} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : (
            <h1></h1>
          )
        }
      </div>
    </div>
  )
}
