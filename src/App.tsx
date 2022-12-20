import { ChangeEvent, useState } from "react";
import { Header, TaskList } from "./components";
import { PlusCircle } from "phosphor-react";
import style from "./App.module.css";

function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const hadleGenerateNewTask = () => {
    setTaskList([...taskList, taskName]);
    setTaskName("");
  };

  const handleSetNewTaskName = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  const handleRemoveTask = (value: string) => {
    const newList = taskList.filter(task => value !== task);
    setTaskList(newList);
  }

  return (
    <div className={style.container}>
      <header>
        <Header />
        <section className={style.listInformation}>
          <input
            value={taskName}
            onChange={handleSetNewTaskName}
            placeholder="Adicione uma nova tarefa"
            name="add"
            type="text"
          />
          <button onClick={() => hadleGenerateNewTask()}>
            Criar
            <PlusCircle size={18} />
          </button>
        </section>
      </header>
      <main>
        <TaskList taskList={taskList} removeTaskList={handleRemoveTask}/>
      </main>
    </div>
  );
}

export default App;
