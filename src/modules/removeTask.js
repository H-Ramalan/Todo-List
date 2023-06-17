import { saveTasks, displayTasks } from "./dataModule.js";

export function removeTask(id) {
  todos = todos
    .filter((task) => task.id !== id)
    .map((task, id) => {
      return { ...task, id: id + 1 };
    });
  saveTasks();
  displayTasks();
}
