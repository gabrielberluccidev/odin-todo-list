import { Task } from "./taskModel.js";
import { getTaskFormInput, clearForm } from "./taskForm.js";
import { createTodoCard } from "./taskUI.js";

export function initTaskController() {
  const btn = document.querySelector("#add-task-button");
  const container = document.querySelector(".todo-list-main-task");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = getTaskFormInput();
    if (!formData) return;

    const task = new Task(
      formData.todoTitleInput,
      formData.todoDateInput,
      formData.todoPriorityInput
    );
    const card = createTodoCard(task);

    container.appendChild(card);

    clearForm();
  });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.closest(".todo-list-main-task-card").remove();
    }
  });
}
