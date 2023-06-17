import { getTodos, saveTasks } from './dataModule.js';
import removeTask from './removeTask.js';

function editTask(event) {
  const taskId = parseInt(event.target.dataset.id, 10);
  const todos = getTodos();
  const task = todos.find((t) => t.id === taskId);
  task.task = event.target.textContent;
  saveTasks();
}

export default function displayTasks() {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  const todos = getTodos();
  todos.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `
      <input type="checkbox" class="check" />
      <span class='title' data-id="${task.id}" contenteditable='true'>${task.task}</span>
      <span class="material-icons close" data-id="${task.id}">close</span>
    `;
    todoList.appendChild(li);
  });

  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const taskId = parseInt(e.target.dataset.id, 10);
      removeTask(taskId);
    });
  });

  const titleEl = document.querySelectorAll('span.title');
  titleEl.forEach((title) => {
    title.addEventListener('input', editTask);
  });
}
