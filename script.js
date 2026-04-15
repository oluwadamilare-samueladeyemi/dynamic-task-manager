// Store all tasks in an array
let myTasks = [];

// grab elements
// Input field where user types a task
const inputField = document.getElementById("taskInput");

// Buttons
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");

const taskList = document.getElementById("taskList");
const selectAllBtn = document.getElementById("selectAllBtn");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

// render function
function renderTasks() {
  taskList.innerHTML = "";

  myTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between bg-gray-700 p-2 rounded";

    li.innerHTML = `
      <div class="flex items-center gap-2">
        <input type="checkbox" class="task-checkbox" data-index="${index}">
        <span>${task}</span>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Add task button click event
addButton.addEventListener("click", function() {
    
    // Get user input
    let newTask = inputField.value.trim();

    // Guard clause (skip empty input)
    if (newTask === "") {
    console.log("Please enter a task before clicking Add.");
    return;
    }

    myTasks.push(newTask);
    renderTasks();

    // Clear input field after adding
    inputField.value = "";
    renderTasks();
    console.log("Numbered List:");

    // Classic for loop (index-based)
    for (let i = 0; i < myTasks.length; i++) {
    console.log((i + 1) + ". " + myTasks[i]);
}
});

// DELETE SPECIFIC TASK
deleteButton.addEventListener("click", function(){

 // Get task name to delete
  let taskToDelete = inputField.value.trim();
  inputField.value = "";

  // New array to store remaining tasks
  let updatedList = [];

  
    for (let task of myTasks) {
    // Keep only tasks that DO NOT match the one to delete
    if (task !== taskToDelete) {
      updatedList.push(task);
    }
  }

  // Replace old array with updated one
  myTasks = updatedList;

  console.log("Updated Task List:");
  for (let i = 0; i < myTasks.length; i++) {
    console.log((i + 1) + ". " + myTasks[i]);
  }
});

// CLEAR ALL TASKS
clearButton.addEventListener("click", function() {
  while (myTasks.length > 0) {
    myTasks.pop();
  }
  console.log("All tasks cleared! Array is now empty:", myTasks);
});


// ADD TASK WITH ENTER KEY
inputField.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {
    addButton.click();
  }
});

deleteSelectedBtn.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".task-checkbox");

  myTasks = myTasks.filter((_, index) => {
    return !checkboxes[index].checked;
  });

  renderTasks();
});

let allSelected = false;

selectAllBtn.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".task-checkbox");

  allSelected = !allSelected;

  checkboxes.forEach(cb => {
    cb.checked = allSelected;
  });

  selectAllBtn.textContent = allSelected ? "Unselect All" : "Select All";
});