import "./style.css";

const todoList = document.querySelector(".todo-list");
const todos = [
  {
    index: 1,
    completed: true,
    task: "Wash the dish",
  },
  {
    index: 2,
    completed: true,
    task: "Go to the gym",
  },
];

function displayTasks() {
  todos.forEach((todos) => {
    const li = document.createElement("li");
    li.className = "list-item";

    li.innerHTML = `<input type="checkbox" class="check" /> ${todos.task} <span class="material-icons" id="close">
close
</span>`;
    todoList.appendChild(li);
  });
}
displayTasks();
