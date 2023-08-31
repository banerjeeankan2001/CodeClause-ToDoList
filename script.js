const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <span class="delete-btn">Delete</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }
}

function deleteTask() {
    this.parentElement.remove();
}
