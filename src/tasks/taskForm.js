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
