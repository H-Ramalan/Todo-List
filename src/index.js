import './style/style.css';
import addTask from './modules/addTask.js';
import {
  displayTasks,
  getTodos,
  saveTasks,
  updateTodos,
} from './modules/dataModule.js';

const form = document.querySelector('.form');
const clearBtn = document.querySelector('.clear-btn');

displayTasks();

function clearTasks() {
  const todos = getTodos();
  const todoToClear = todos.filter((x) => x.completed === false);
  updateTodos(todoToClear);
  saveTasks();
  displayTasks();
}

form.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearTasks);
