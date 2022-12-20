import { ListItem } from "../ListItem";
import { NoTask } from "../NoTask";
import style from "./styles.module.css";

interface ITaskListProps {
  taskList: string[];
}

export function TaskList({ taskList }: ITaskListProps) {
  return (
    <div className={style.container}>
      <section>
        <div className={style.informationWithTask}>
          <h3 id={style.blueText}>Tarefas criadas</h3>
          <div>1</div>
        </div>

        <div className={style.informationWithTask}>
          <h3 id={style.purpleText}>Concluídas</h3>
          <div>1</div>
        </div>
      </section>
      <hr />
      <section className={style.taskList}>
        {taskList.length === 0 ? (
          <NoTask />
        ) : (
          taskList.map((props) => <ListItem key={props} name={props} />)
        )}
      </section>
    </div>
  );
}
