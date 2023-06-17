import { saveTasks, displayTasks } from "./dataModule.js";
const todos = [];
export function addTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector(".task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const newTask = {
    id: todos.length + 1,
    completed: false,
    task: taskText,
  };

  todos.push(newTask);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}
