function getTaskInfo() {
  const taskAddBtn = document.querySelector("#add-task-button");

  taskAddBtn.addEventListener("click", function (e) {
    const taskTitle = document.querySelector("#title").textContent;
    const taskData = document.querySelector("#date").textContent;
    const taskPriority = document.querySelector("#priority").textContent;

    console.log(`
    Task title: ${taskTitle}
    Task data: ${taskData};
    Task priority: ${taskPriority};
    `);
  });
}

export { getTaskInfo };
