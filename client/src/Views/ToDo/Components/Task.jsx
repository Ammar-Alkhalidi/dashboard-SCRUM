import React from "react";
import "./css/Task.css";
import XMark from "../../../assets/icons/xmark.svg?react";
import StarSolid from "../../../assets/icons/star-solid.svg?react";
import StarRegular from "../../../assets/icons/star-regular.svg?react";

const Task = ({ task }) => {
  return (
    <div className="task-card container ">
      <div className="task-title">
        <input type="checkbox" name="isDone" id="isDone" />
        <h3>{task.name}</h3>
      </div>
      <div className="controls">
        {task.isFav ? (
          <StarSolid className="task-icon star-solid" />
        ) : (
          <StarRegular className="task-icon star-reg" />
        )}

        <button className="xmark-btn">
          <XMark className="task-icon xmark" />
        </button>
      </div>
    </div>
  );
};

export default Task;
