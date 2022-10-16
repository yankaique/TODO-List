import { NoTask } from "../NoTask";
import style from "./styles.module.css";

export function TaskList() {
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
      <section>
        <NoTask />
      </section>
    </div>
  );
}
