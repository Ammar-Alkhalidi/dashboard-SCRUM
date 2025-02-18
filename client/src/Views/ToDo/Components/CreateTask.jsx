import React from "react";
import "./css/CreateTask.css";

const CreateTask = ({ newTaskName, setNewTaskName }) => {
  return (
    <div className="create-task container">
      <input
        type="text"
        placeholder="Write your task name here"
        className="create-task-input"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
    </div>
  );
};

export default CreateTask;
