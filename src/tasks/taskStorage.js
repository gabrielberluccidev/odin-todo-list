import { checkPriorityOrder } from "./checkPriorityOrder";
import { getCardInfo } from "./taskForm";
import { createTodoCard } from "./taskUI";

export function saveTask() {
  const cardArrays = Array.from(
    document.querySelectorAll(".todo-list-main-task-card")
  );

  const cardInfo = new Array();

  cardArrays.forEach((card) => {
    const { title, date, priority, id } = getCardInfo(card);

    cardInfo.push({ title, date, priority, id });
  });

  cardInfo.forEach((info) => {
    //console.log(info);
    localStorage.setItem(info.id, JSON.stringify(info));
  });
}

export function getTasks() {
  console.log("getTasks foi chamada para carregar tarefas salvas.");
  const mainContainer = document.querySelector(".todo-list-main-task");

  mainContainer.innerHTML = "";

  // 2. Percorre todos os itens salvos no localStorage.
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // console.log(key);

    const { title, date, priority, id } = JSON.parse(localStorage.getItem(key));

    // console.log(title, date, priority);

    const cardElement = createTodoCard(undefined, title, date, priority);
    cardElement.dataset.id = id;

    mainContainer.append(cardElement);
  }
}
