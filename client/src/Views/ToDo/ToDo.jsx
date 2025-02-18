import React, { useState } from "react";
import "./ToDo.css";
import CreateTask from "./Components/CreateTask";
import TaskList from "./Components/TaskList";

const ToDo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const changeEditMode = () => {
    setIsAdding((prevState) => !prevState);
  };

  console.log(isAdding);
  return (
    <section className="todo">
      <div className="headline">
        <h2>To-Do List</h2>
        <button onClick={changeEditMode} className="add-task">
          Add New Task
        </button>
      </div>
      {isAdding ? <CreateTask /> : <TaskList />}
    </section>
  );
};

export default ToDo;
