import { getPriorityOrder, getCardInfo } from "./taskForm.js";
import { createTodoCard } from "./taskUI.js";

export function checkPriorityOrder() {
  const mainContainer = document.querySelector(".todo-list-main-task");
  const order = getPriorityOrder();
  // console.log("order name from checkPriorityOrder.js: ", order);

  let cardInfo = new Array();

  const priorityOrder = {
    HIGH: 1,
    MEDIUM: 2,
    LOW: 3,
  };

  const cardArrays = Array.from(
    document.querySelectorAll(".todo-list-main-task-card")
  );

  cardArrays.forEach((card) => {
    const { title, date, priority } = getCardInfo(card);

    cardInfo.push({ title, date, priority });
  });

  /* this handle the sort
  TODO: see if is necessary to make a function to handle all the situations bellow
  */

  if (order == "order-name-desc") {
    cardInfo.sort((a, b) => {
      const firstTitle = a.title.toUpperCase(); // ignore upper and lowercase
      const secondTitle = b.title.toUpperCase(); // ignore upper and lowercase
      if (firstTitle < secondTitle) {
        return -1;
      }
      if (firstTitle > secondTitle) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  if (order == "order-name-asc") {
    cardInfo.sort((a, b) => {
      const firstTitle = a.title.toUpperCase(); // ignore upper and lowercase
      const secondTitle = b.title.toUpperCase(); // ignore upper and lowercase
      if (firstTitle > secondTitle) {
        return -1;
      }
      if (firstTitle < secondTitle) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  // TODO: validate if is really necessary date-fns for this
  if (order == "order-date-desc") {
    cardInfo.sort((a, b) => {
      const firstDate = a.date.toUpperCase(); // ignore upper and lowercase
      const secondDate = b.date.toUpperCase(); // ignore upper and lowercase
      if (firstDate > secondDate) {
        return -1;
      }
      if (firstDate < secondDate) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  if (order == "order-date-asc") {
    cardInfo.sort((a, b) => {
      const firstDate = a.date.toUpperCase(); // ignore upper and lowercase
      const secondDate = b.date.toUpperCase(); // ignore upper and lowercase

      if (firstDate < secondDate) {
        return -1;
      }
      if (firstDate > secondDate) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  if (order === "order-priority-desc") {
    cardInfo.sort((a, b) => {
      const priorityA = priorityOrder[a.priority] || 99; // Use 99 para prioridades não encontradas
      const priorityB = priorityOrder[b.priority] || 99;
      return priorityA - priorityB;
    });
  }

  if (order === "order-priority-asc") {
    cardInfo.sort((a, b) => {
      const priorityA = priorityOrder[a.priority] || 99; // Use 99 para prioridades não encontradas
      const priorityB = priorityOrder[b.priority] || 99;
      return priorityB - priorityA;
    });
  }

  mainContainer.replaceChildren();

  cardInfo.forEach((info) => {
    mainContainer.append(
      createTodoCard(undefined, info?.title, info?.date, info?.priority)
    );
  });
}
