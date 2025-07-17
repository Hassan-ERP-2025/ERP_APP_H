function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // ✅ DONE button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () {
    moveToDoneList(span.textContent);
    taskList.removeChild(li);
  };

  // ❌ Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// ✅ Move task to the done list
function moveToDoneList(taskText) {
  const doneList = document.getElementById("doneList");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("completed");

  li.appendChild(span);
  doneList.appendChild(li);
}

// ✅ Add "Enter" key listener
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
