import React from "react";

function Task({ task, text, category, onDeleteTask }) {
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;

  return (
    <li className="task">
      <span>{taskText}</span> - <span>{taskCategory}</span>
      {onDeleteTask && task && (
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      )}
    </li>
  );
}

export default Task;
