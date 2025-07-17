function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Create task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle completed style on click
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// ✅ Add this code to trigger on "Enter" key
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
