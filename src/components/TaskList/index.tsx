import { useState } from "react";
import { ListItem } from "../ListItem";
import { NoTask } from "../NoTask";
import style from "./styles.module.css";

interface ITaskListProps {
  taskList: string[];
  removeTaskList: (value: string) => void;
}

export function TaskList({ taskList, removeTaskList }: ITaskListProps) {
  const [finishedTasks, setFinishedTasks] = useState(0);

  const handleUpdateFinishedNumber = (operation: "add" | "remove") => {
    if(operation === "add"){
      return setFinishedTasks(finishedTasks + 1);
    }else if(operation === "remove" && finishedTasks > 0 ){
      setFinishedTasks(finishedTasks - 1);
    }

  }

  return (
    <div className={style.container}>
      <section>
        <div className={style.informationWithTask}>
          <h3 id={style.blueText}>Tarefas criadas</h3>
          <div>{taskList.length}</div>
        </div>

        <div className={style.informationWithTask}>
          <h3 id={style.purpleText}>Concluídas</h3>
          <div>{finishedTasks}</div>
        </div>
      </section>
      <hr />
      <section className={style.taskList}>
        {taskList.length === 0 ? (
          <NoTask />
        ) : (
          taskList.map((props) => <ListItem key={props} name={props} removeTaskList={removeTaskList} updateFinishedTask={handleUpdateFinishedNumber} />)
        )}
      </section>
    </div>
  );
}
