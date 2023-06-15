import './style.css';

const todoList = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTasks() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function displayTasks() {
  todoList.innerHTML = '';

  todos.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `
      <input type="checkbox" class="check" />
      ${task.task}
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
}

const addTask = (e) => {
  e.preventDefault();
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const newTask = {
    id: todos.length + 1,
    completed: false,
    task: taskText,
  };

  todos.push(newTask);
  taskInput.value = '';
  saveTasks();
  displayTasks();
};

function removeTask(id) {
  todos = todos.filter((task) => task.id !== id);
  saveTasks();
  displayTasks();
}

const form = document.querySelector('.form');
form.addEventListener('submit', addTask);

function clearTasks() {
  const checkedItems = document.querySelectorAll('.check:checked');
  checkedItems.forEach((item) => {
    const taskId = parseInt(item.nextElementSibling.dataset.id, 10);
    removeTask(taskId);
  });
}

clearBtn.addEventListener('click', clearTasks);

displayTasks();
