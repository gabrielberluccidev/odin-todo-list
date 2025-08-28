import { parse, isBefore, startOfDay } from "date-fns";

function checkDate(dateStr) {
  const taskDate = startOfDay(parse(dateStr, "yyyy-MM-dd", new Date()));
  const today = startOfDay(new Date());

  if (isBefore(taskDate, today)) return "past";
  if (taskDate.getTime() === today.getTime()) return "today";
  return "future";
}

export function checkExpiredDate() {
  const cards = document.querySelectorAll(".todo-list-main-task-card");

  cards.forEach((card) => {
    const taskDate = card.querySelector(
      ".todo-list-main-task-card-date p"
    )?.textContent;
    if (!taskDate) return;

    const status = checkDate(taskDate);
    let expiredCard = card.querySelector(".expired");

    if (status === "past") {
      if (!expiredCard) {
        expiredCard = document.createElement("span");
        expiredCard.classList.add("expired");
        expiredCard.textContent = "Expired";
        card.appendChild(expiredCard);
      }
      expiredCard.style.display = "inline";
    } else {
      if (expiredCard) {
        expiredCard.style.display = "none";
      }
    }
  });
}
