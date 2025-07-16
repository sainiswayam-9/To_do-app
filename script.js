const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to mark complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  input.value = "";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on ENTER key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
