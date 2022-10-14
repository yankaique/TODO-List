import { Header } from "./components";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <header>
        <Header />
      </header>
    </div>
  );
}

export default App;
