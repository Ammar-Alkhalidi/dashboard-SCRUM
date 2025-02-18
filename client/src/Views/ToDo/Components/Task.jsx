import React from "react";
import "./css/Task.css";
import XMark from "../../../assets/icons/xmark.svg?react";
import StarSolid from "../../../assets/icons/star-solid.svg?react";
import StarRegular from "../../../assets/icons/star-regular.svg?react";

const Task = ({ task, toggleFav, deleteTask, toggleDone }) => {
  return (
    <div className="task-card container">
      <div className="task-title">
        <input
          type="checkbox"
          name="isDone"
          id={`task-${task.id}`}
          checked={task.isDone}
          onChange={() => toggleDone(task.id)}
        />
        <h3 style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.name}
        </h3>
      </div>
      <div className="controls">
        <button onClick={() => toggleFav(task.id)} className="fav-btn">
          {task.isFav ? (
            <StarSolid className="task-icon star-solid" />
          ) : (
            <StarRegular className="task-icon star-reg" />
          )}
        </button>
        <button onClick={() => deleteTask(task.id)} className="xmark-btn">
          <XMark className="task-icon xmark" />
        </button>
      </div>
    </div>
  );
};

export default Task;
