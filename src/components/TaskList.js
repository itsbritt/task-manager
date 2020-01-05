import React, { useContext } from "react";

// Context
import { TaskListContext } from "../context/TaskListContext";

// Components
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
