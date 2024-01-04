const taskManager = document.getElementById('task-manager');
const taskForm = document.createElement('form');
const taskInput = document.createElement('input');
const taskListContainer = document.createElement('div');
const taskList = document.createElement('ul');

taskForm.innerHTML = `
    <label for="taskInput">New Task:</label>
    <input type="text" id="taskInput" required>
    <button type="submit">Add Task</button>
`;

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask(taskInput.value);
});

taskListContainer.appendChild(taskList); // Place the taskList inside a container
taskListContainer.innerHTML = '<h2>Task List</h2>';

taskManager.appendChild(taskForm);
taskManager.appendChild(taskListContainer); // Append the container, not the taskList directly

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear the input field after adding a task
}
