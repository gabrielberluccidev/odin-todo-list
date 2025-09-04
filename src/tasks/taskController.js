import { Task } from "./taskModel.js";
import { getTaskFormInput, clearForm } from "./taskForm.js";
import { createTodoCard, closeModal, openEditModal } from "./taskUI.js";
import { checkExpiredDate } from "./checkExpiredDate.js";
import { checkPriorityOrder } from "./checkPriorityOrder.js";

export function initTaskController() {
  const btn = document.querySelector("#add-task-button");
  const container = document.querySelector(".todo-list-main-task");
  const order = document.querySelector("#order");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = getTaskFormInput();
    if (!formData) return;

    const task = new Task(
      formData.todoTitleInput,
      formData.todoDateInput,
      formData.todoPriorityInput
    );
    const card = createTodoCard(task, undefined, undefined, undefined);

    container.appendChild(card);

    clearForm();
    closeModal();

    setInterval(checkExpiredDate, 1000);
  });

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      const card = e.target.closest(".todo-list-main-task-card");
      openEditModal(card);
    }
    if (e.target.classList.contains("delete")) {
      e.target.closest(".todo-list-main-task-card").remove();
    }
  });

  order.addEventListener("change", () => {
    checkPriorityOrder();
  });
}
