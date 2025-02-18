import React from "react";
import "./css/TaskList.css";
import Task from "./Task";

const TaskList = ({ tasks, toggleFav, deleteTask, toggleDone }) => {
  return (
    <div className="task-list">
      {tasks.map((t) => (
        <Task key={t.id} task={t} toggleFav={toggleFav} deleteTask={deleteTask} toggleDone={toggleDone} />
      ))}
    </div>
  );
};

export default TaskList;
