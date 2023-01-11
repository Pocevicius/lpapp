import { useState } from "react";
import styles from "./portfolio.module.css";
import closeImg from "../../assets/close-icon-29.png";
// import { useParams } from "react-router-dom";

const Portfolio = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("x");

  const createTask = () => {
    setTasks([...tasks, textInput]);
  };
  const filterTask = (task) => {
    setTasks([...tasks.filter((item) => item !== task)]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>title</div>,
      <div className={styles.tasksWrapper}>
        {tasks.map((task) => {
          return (
            <div className={styles.taskWrapper}>
              <div>{task}</div>
              <button onClick={() => filterTask(task)}>
                <img src={closeImg} />
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.inputForm}>
        <input
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
        <button onClick={() => createTask()}>Submit</button>
      </div>
    </div>
  );
};

export default Portfolio;
