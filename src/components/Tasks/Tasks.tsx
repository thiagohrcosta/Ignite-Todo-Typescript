import { PlusCircle, ClipboardText, Trash, Check } from "phosphor-react";
import React, { ChangeEvent, useState } from "react";
import styles from "./Tasks.module.css";

interface Task {
  content: string;
  isDone: boolean;
}

export function Tasks(){
  const [toDoTasks, setToDoTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState("");

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value);
    setNewTask(event.currentTarget.value);
  }

  function handleCreateNewTask() {
    setToDoTasks([...toDoTasks, { content: newTask, isDone: false }]);
    setNewTask("");
  }

  function handleDeleteTask(index: number) {
    const newTasks = [...toDoTasks];
    newTasks.splice(index, 1);
    setToDoTasks(newTasks);
  }

  function handleCompletedTask(index: number) {
    const newTasks = [...toDoTasks];
    newTasks[index].isDone = newTasks[index].isDone ? false : true;
    setToDoTasks(newTasks);
  }

  function displayTasks() {
    return toDoTasks.map((task, index) => (
      <div key={index} className={styles.task}>
        <div
          className={task.isDone ? styles.taskCheckboxChecked : styles.taskCheckbox }
          onClick={(e) => handleCompletedTask(index)}
        >
          {
            task.isDone ? (
              <Check size={18} />
            ) : (
              <input type="checkbox" checked={task.isDone}/>
            )
          }
        </div>
        <span>{task.content}</span>
        <Trash
          size={16}
          className={styles.taskTrashIcon}
          onClick={() => handleDeleteTask(index)}
        />
      </div>
    ));
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <input
          value={newTask}
          onChange={(e) => handleNewTaskContent(e)}
          className={styles.taskInput}
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={handleCreateNewTask} className={styles.btnAddTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.tasksInformation}>
        <p>Tarefas criadas: <span>{toDoTasks.length}</span></p>
        <p>Tarefas concluídas: <span>0</span></p>
      </div>

      <div className={styles.tasksList}>
        {
          toDoTasks.length < 1 ? (
            <div>
              <ClipboardText size={56}  className={styles.taskIcon} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : (
              displayTasks()
          )
        }
      </div>
    </div>
  )
}
