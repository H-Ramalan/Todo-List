import './style/style.css';
import { addTask } from './modules/addTask.js';
import { removeTask } from './modules/removeTask.js';
import { saveTasks, displayTasks } from './modules/dataModule.js';

const form = document.querySelector('.form');
const clearBtn = document.querySelector('.clear-btn');

form.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearTasks);

displayTasks();

function clearTasks() {
  const checkedItems = document.querySelectorAll('.check:checked');
  checkedItems.forEach((item) => {
    const taskId = parseInt(item.nextElementSibling.dataset.id);
    removeTask(taskId);
  });
}
