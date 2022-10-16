import { ChangeEvent, useState } from "react";
import { Header } from "./components";
import { PlusCircle } from "phosphor-react";
import style from "./App.module.css";

function App() {
  const [taskName, setTaskName] = useState<string>("");

  const hadleGenerateNewTask = () => {
    setTaskName("");
  };

  const handleSetNewTaskName = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  return (
    <div className={style.container}>
      <header>
        <Header />
        <section className={style.listInformation}>
          <input
            value={taskName}
            onChange={handleSetNewTaskName}
            placeholder="Adicione uma nova tarefa"
            type="text"
          />
          <button onClick={() => hadleGenerateNewTask()}>
            Criar
            <PlusCircle size={18} />
          </button>
        </section>
      </header>
    </div>
  );
}

export default App;
