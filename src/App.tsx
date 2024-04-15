import "./App.css";
import { useState, FC, ChangeEvent } from "react";
// import {v4 as uuidv4} from 'uuid';

interface ITask {
  taskname: string;
  deadline: number;
}
const App: FC = () => {
  const [tasks, setTasks] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setToList] = useState<ITask[]>([]);

  // console.log(uuidv4())
  const handelChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTasks(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };
  const onSubmit = (): void => {
    const newTask = { taskname: tasks, deadline: deadline };
    setToList([...todoList, newTask]);
    console.log(todoList.map((task) => task.taskname));
    setTasks("");
    setDeadline(0);
  };

  const completTask =(tasknameDelete: string): void =>{
    setToList(todoList.filter((task) => task.taskname !== tasknameDelete))
  }
  return (
    <>
      <h1>Basic todo in typescript</h1>
      <ul id="list">
        {todoList.map((task: ITask, index: number) => {
          return (
            <li key={index}>
              {task.taskname} {task.deadline}
              <button onClick={() => completTask(task.taskname)}>X</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        id="input_task"
        placeholder="add task"
        onChange={handelChange}
        value={tasks}
        name="task"
      />
      <input
        type="number"
        placeholder=" set your deadline"
        onChange={handelChange}
        value={deadline}
        name="deadline"
      />
      <button onClick={onSubmit} id="submit">
        submit
      </button>
    </>
  );
};

export default App;
