import clipboardIcon from "../../assets/clipboard-icon.svg";
import style from "./styles.module.css";

export function NoTask() {
  return (
    <div className={style.container}>
      <img src={clipboardIcon} alt="Icone de prancheta" />
      <b>Você ainda não tem tarefas cadastradas</b>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
