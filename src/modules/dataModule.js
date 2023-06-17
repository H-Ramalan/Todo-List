import statusChange from './statusModule.js';

let todos = JSON.parse(localStorage.getItem('todos')) || [];

export function saveTasks() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodos() {
  return todos;
}

export function updateTodos(updatedTodos) {
  todos = updatedTodos;
}

export function removeTask(id) {
  let todos = getTodos(); // Get the current todos array
  todos = todos
    .filter((task) => task.id !== id)
    .map((task, id) => ({ ...task, id: id + 1 }));
  updateTodos(todos); // Update the todos array
  saveTasks();
  // eslint-disable-next-line
  displayTasks();
}

export function editTask(event) {
  const taskId = parseInt(event.target.dataset.id, 10);
  const todos = getTodos();
  const task = todos.find((t) => t.id === taskId);
  task.task = event.target.textContent;
  saveTasks();
}

export function displayTasks() {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  const todos = getTodos();
  todos.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `
      <input type="checkbox" class="check" data-id="${task.id}" />
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

  const checkboxs = document.querySelectorAll('.check');
  checkboxs.forEach((button) => {
    button.addEventListener('change', (e) => {
      const todos = getTodos(); // Get the current todos array
      const taskId = parseInt(e.target.dataset.id, 10);
      const itemToUpdate = todos.find((x) => x.id === taskId);
      statusChange(itemToUpdate);
      updateTodos(todos);
      saveTasks();
    });
  });

  const titleEl = document.querySelectorAll('span.title');
  titleEl.forEach((title) => {
    title.addEventListener('input', editTask);
  });
}
