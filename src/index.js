import "./style.css";
// import removeTask from "./modules/removetask";
// import addTask from "./modules/addtasks";

const add = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");
const deleteBtn = document.querySelector("#close");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTasks() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function addTask(e) {
  const taskInput = document.querySelector(".task-input");
  const newTask = {
    id: todos.length + 1,
    completed: false,
    task: taskInput.value,
  };
  todos.push(newTask);
  e.preventDefault();

  saveTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);

  for (let i = index; i < tasks.length; i++) {
    tasks[i].index = i + 1;
  }

  saveTasks();
}

add.addEventListener("submit", addTask);
deleteBtn.addEventListener("click", removeTask);

function displayTasks() {
  todos.forEach((todos) => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `<input type="checkbox" class="check" /> ${todos.task} <span class="material-icons" id="close">close</span>`;
    todoList.appendChild(li);
  });
  saveTasks();
}
displayTasks();
