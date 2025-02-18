import React from "react";
import "./css/TaskList.css";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((t) => {
        return <Task task={t} />;
      })}
    </div>
  );
};

export default TaskList;
