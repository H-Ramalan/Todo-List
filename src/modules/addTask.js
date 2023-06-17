import {
  getTodos,
  updateTodos,
  saveTasks,
  displayTasks,
} from './dataModule.js';

export default function addTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const todos = getTodos(); // Get the current todos array

  const newTask = {
    id: todos.length + 1,
    completed: false,
    task: taskText,
  };

  todos.push(newTask);
  taskInput.value = '';
  updateTodos(todos); // Update the todos array
  saveTasks();
  displayTasks();
}
