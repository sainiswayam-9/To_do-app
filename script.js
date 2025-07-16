document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
  }

  addBtn.addEventListener("click", addTask);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
