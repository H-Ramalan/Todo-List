let todos = JSON.parse(localStorage.getItem("todos")) || [];

export function saveTasks() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function displayTasks() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ""; // Clear the HTML todo list

  todos.forEach((task) => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `
      <input type="checkbox" class="check" />
      <span class='title' data-id="${task.id}" contenteditable='true'>${task.task}</span>
      <span class="material-icons close" data-id="${task.id}">close</span>
    `;
    todoList.appendChild(li);
  });

  // Add event listeners for the close buttons
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const taskId = parseInt(e.target.dataset.id);
      removeTask(taskId);
    });
  });

  // Add event listeners for editing tasks
  const titleEl = document.querySelectorAll("span.title");
  titleEl.forEach((title) => {
    title.addEventListener("input", editTask);
  });
}

export function getTodos() {
  return todos;
}

export function updateTodos(updatedTodos) {
  todos = updatedTodos;
}
