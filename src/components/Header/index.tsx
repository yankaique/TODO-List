import todoLogo from "../../assets/todoLogo.svg";
import style from "./styles.module.css";

export function Header() {
  return (
    <div className={style.container}>
      <img src={todoLogo} alt="Logomarca da aplicação TODO" />
    </div>
  );
}
