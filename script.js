// Store all tasks in an array
let myTasks = [];

// grab elements
// Input field where user types a task
const inputField = document.getElementById("taskInput");

// Buttons
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");

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

    // Clear input field after adding
    inputField.value = "";
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
 // Remove all items using a while loop
  while (myTasks.length > 0) {
    myTasks.pop();
  }
 // Confirm array is empty
  console.log("All tasks cleared! Array is now empty:", myTasks);
});