import { getTaskFormInput } from "./taskForm.js";

export function createTodoCard(task, title, date, priority) {
  /* create the divs based on HMTL project which is based on the classes as bellow:

  todo-list-main-task: immutable, insn't handled by the DOM;
    (firstChild)todo-list-main-task-card: mutable, handled by the DOM;
        (mainChild)todo-list-main-task-title: mutable, handled by the DOM;
            (child)checkbox: mutable, is handled by the DOM;;
            (child)<p>todoTitle</p>: mutable, handled by the DOM;
        (mainChild)todo-list-main-task-card-date: mutable, handled by the DOM;
            (chiled)<p>todoDate</p>: mutable, handled by the DOM;
        (mainChild)<span>todoPriority</span>: mutable, hanled by the DOM;
  todo-list-main-task: immutable, insn't handled by the DOM;    
  */

  /* the section bellow will handle the creation of all the elements that will be handled by the DOM */

  /* those are the div elements:
    todoCard = todo-list-main-task-card;
    todoTitleCard = todo-list-main-task-title;
    todoDateCard = todo-list-main-task-card-date;
  */
  const todoCard = document.createElement("div");
  const todoTitleCard = document.createElement("div");
  const todoDateCard = document.createElement("div");

  /* this block is used to create the elements that will recive the infos
    about the todo list 
    checkbox: the checkbox to mark if the task is whether finshed or not;
    todoTitle: it's the <p>todoTitle</p> element;
    todoDate: it's the <p>todoDate</p> element;
    todoPriority: it's the <span>taskPriority</span> element;
    */
  const checkbox = document.createElement("input");
  const todoTitle = document.createElement("p");
  const todoDate = document.createElement("p");
  const todoPriority = document.createElement("span");
  const deleteTask = document.createElement("span");

  /* this section will add classes to the divs */
  todoCard.classList.add("todo-list-main-task-card");
  todoTitleCard.classList.add("todo-list-main-task-card-title");
  todoDateCard.classList.add("todo-list-main-task-card-date");

  /* add classes and attributes to the elements */
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  deleteTask.classList.add("material-symbols-outlined");
  deleteTask.classList.add("delete");
  


  let todoTitleInput, todoDateInput, todoPriorityInput;

  if (title !== undefined && date !== undefined && priority !== undefined) {
    todoTitleInput = title,
    todoDateInput = date,
    todoPriorityInput = priority
  } else {
    const formInput = getTaskFormInput();

    todoTitleInput = formInput.todoTitleInput
    todoDateInput = formInput.todoDateInput
    todoPriorityInput = formInput.todoPriorityInput
  }

  
  todoPriority.classList.add(`${todoPriorityInput}`);

  /* add datasets to the todoCard, may not be used */
  todoCard.dataset.id = Date.now();
  todoCard.dataset.title = todoTitleInput;
  todoCard.dataset.date = todoDateInput;
  todoCard.dataset.priority = todoPriorityInput;

  // /* get the input's values from taskForm.js */

  /* add the textContent to the elements */
  todoTitle.textContent = todoTitleInput;
  todoDate.textContent = todoDateInput;
  // console.log(todoDate);

  todoPriority.textContent = todoPriorityInput;
  deleteTask.textContent = "delete";

  /* this section append the childs, following the DOM */

  /* append the divs and elements to the todoCard */
  todoCard.appendChild(todoTitleCard);
  todoCard.appendChild(todoDateCard);
  todoCard.appendChild(todoPriority);
  todoCard.appendChild(deleteTask);

  /* append the elements to the todoTitleCard */
  todoTitleCard.appendChild(checkbox);
  todoTitleCard.appendChild(todoTitle);

  /* append the elements to the todoDateCard */
  todoDateCard.appendChild(todoDate);

  return todoCard;
}

export function openEditModal(card) {
  const modal = document.querySelector("#edit-modal");
  const titleInput = document.querySelector("#edit-title");
  const dateInput = document.querySelector("#edit-date");
  const priorityInput = document.querySelector("#edit-priority");
  const saveBtn = document.querySelector("#save-edit");

  // TODO: add form validation

  titleInput.value = card.dataset.title;
  dateInput.value = card.dataset.date;
  priorityInput.value = card.dataset.priority.toLowerCase();

  modal.style.display = "block";

  const onSave = () => {
    const newTitle = titleInput.value.trim();
    const newDate = dateInput.value.trim();
    const newPriority = priorityInput.value.toUpperCase();

    card.dataset.title = newTitle;
    card.dataset.date = newDate;
    card.dataset.priority = newPriority;

    card.querySelector(".todo-list-main-task-card-title p").textContent =
      newTitle;
    card.querySelector(".todo-list-main-task-card-date p").textContent =
      newDate;
    card.querySelector("span").textContent = newPriority;
    card.querySelector("span").className = newPriority;

    modal.style.display = "none";

    saveBtn.removeEventListener("click", onSave);
  };

  saveBtn.addEventListener("click", onSave);
}

export function closeModal() {
  const modal = document.querySelector("#edit-modal");
  const closeModalBtn = document.querySelector("#close-modal");

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // window.addEventListener("click", (e) => {
  //   if (e.taget === modal) modal.style.display = "none";
  // });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block")
      modal.style.display = "none";
  });
}
