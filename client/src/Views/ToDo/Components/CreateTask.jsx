import React from "react";
import "./css/CreateTask.css";

const CreateTask = () => {
  return (
    <div className="create-task container">
      <input
        type="text"
        placeholder="Write Your task name here"
        className="create-task-input"
      />
    </div>
  );
};

export default CreateTask;
