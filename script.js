// Grab elements
// Input field where user types a task
const form = document.querySelector(".form");
const inputField = document.getElementById("taskInput");

// Buttons
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");

const taskList = document.getElementById("taskList");

// Store all tasks in an array
let myTasks = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input
  let newTask = inputField.value.trim();

  // Guard clause (skip empty input)
  if (newTask === "") {
    alert("Please enter a task before clicking Add.");
    return;
  }

  myTasks.push(newTask);
  renderTasks(myTasks);

  // Clear input field after adding
  inputField.value = "";
});

// render function
function renderTasks(myTasks) {
  taskList.innerHTML = "";

  // Classic for loop (index-based)
  for (let i = 0; i < myTasks.length; i++) {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between gap-4";
    const input = document.createElement("input");
    input.type = "checkbox";
    const p = document.createElement("p");
    p.className = "grow text-white";
    p.textContent = myTasks[i];
    const button = document.createElement("button");

    button.className =
      "deletebtn bg-red-500 py-0.5 px-2 rounded text-xs cursor-pointer";
    button.textContent = "delete";
    button.setAttribute("data-index", i);

    li.append(input, p, button);

    taskList.appendChild(li);
  }
}

taskList.addEventListener("click", function (event) {
  const button = event.target.closest(".deletebtn");
  if (!button) return;

  const index = button.dataset.index;

  myTasks.splice(index, 1);
  renderTasks(myTasks);
});

taskList.addEventListener("click", function (event) {
  const checkbox = event.target.closest("input");
  if (!checkbox) return;
  checkbox.nextElementSibling.classList.add("line-through");
});

clearButton.addEventListener("click", function (event) {
  myTasks = [];
  renderTasks(myTasks);
});
