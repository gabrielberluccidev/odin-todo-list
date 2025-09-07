export function getTaskFormInput() {
  const todoTitleInput = document.querySelector("#title").value.trim();
  const todoDateInput = document.querySelector("#date").value.trim();
  const todoPriorityInput = document
    .querySelector("#priority")
    .value.toUpperCase()
    .trim();

  if (!todoTitleInput || !todoDateInput || !todoPriorityInput) {
    alert("Fill in all fields");
    return null;
  }

  return { todoTitleInput, todoDateInput, todoPriorityInput };
}

export function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#priority").value = "";
}

export function getPriorityOrder() {
  const priorityOrder = document.querySelector("#order").value.toLowerCase();

  // console.log("order name from taskForm.js: ", priorityOrder);

  if (priorityOrder === "none") return "name";

  return priorityOrder;
}

export function getCardInfo(card) {
  const title = card.querySelector(
    ".todo-list-main-task-card-title p"
  )?.textContent;
  const date = card.querySelector(
    ".todo-list-main-task-card-date p"
  )?.textContent;
  const priority = card.querySelector(
    ".todo-list-main-task-card span"
  )?.textContent;

  const id = card.dataset.id;

  return { title, date, priority, id };
}
