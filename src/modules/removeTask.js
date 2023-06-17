import {
  getTodos,
  updateTodos,
  saveTasks,
  displayTasks,
} from './dataModule.js';

export function removeTask(id) {
  let todos = getTodos(); // Get the current todos array
  todos = todos
    .filter((task) => task.id !== id)
    .map((task, id) => ({ ...task, id: id + 1 }));
  updateTodos(todos); // Update the todos array
  saveTasks();
  displayTasks();
}
