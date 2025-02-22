// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Add Task Event Listener
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();  // Remove extra spaces
    if (taskText) {
        addTask(taskText); // Add to UI
        saveTask(taskText); // Save to localStorage
        taskInput.value = ""; // Clear input
    }
});

// Function to add task to UI
function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `${text} <button onclick="removeTask(this)">❌</button>`;
    taskList.appendChild(li);
}

// Function to remove task
function removeTask(button) {
    const li = button.parentElement;
    const taskText = li.textContent.replace("❌", "").trim();
    li.remove();
    removeTaskFromStorage(taskText);
}

// Save task to localStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTask(task));
}

// Remove task from localStorage
function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
