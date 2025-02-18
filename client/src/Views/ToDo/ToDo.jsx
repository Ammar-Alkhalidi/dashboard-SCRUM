import React, { useState } from "react";
import "./ToDo.css";
import CreateTask from "./Components/CreateTask";
import TaskList from "./Components/TaskList";

const ToDo = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [tasks, setTasks] = useState([
    { id: 1, name: "test task", isFav: false, isDone: false },
  ]);

  const changeEditMode = () => {
    setIsAdding((prevState) => !prevState);
  };

  // Task als Favorit markieren/entfernen
  const toggleFav = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isFav: !task.isFav } : task
      )
    );
  };

  // Task löschen
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Task als erledigt markieren/entfernen
  const toggleDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <section className="todo">
      <div className="headline">
        <h2> {isAdding ? "Add New To-Do" : "To-Do List"}</h2>
        <button onClick={changeEditMode} className="add-task">
          {isAdding ? "Save" : "Add New Task"}
        </button>
      </div>
      {isAdding ? <CreateTask /> : ""}
      <TaskList
        tasks={tasks}
        toggleFav={toggleFav}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
      />
    </section>
  );
};

export default ToDo;
