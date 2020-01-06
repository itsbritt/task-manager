import React from "react";

const TaskForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="taskinput"
        placeholder="Add Task..."
        required
      />
      <div className="buttons">
        <button className="btn add-task-btn">Add Task</button>
        <button className="btn remove-task-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
