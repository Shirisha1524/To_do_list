function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => {
    li.classList.toggle("completed");
  };

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null) {
      span.textContent = newTask;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
}

document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
  const modeBtn = document.getElementById("toggleMode");
  if (document.body.classList.contains("dark")) {
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    modeBtn.textContent = "🌙 Dark Mode";
  }
};
