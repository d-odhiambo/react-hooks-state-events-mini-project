import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // State for tasks
  const [tasks, setTasks] = useState(TASKS);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handler to delete a task
  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  // Handler to add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
