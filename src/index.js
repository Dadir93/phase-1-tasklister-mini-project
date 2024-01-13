document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const taskDescription = document.getElementById('new-task-description').value;

      const newTaskElement = document.createElement('li');
      newTaskElement.textContent = taskDescription;

      document.getElementById('tasks').appendChild(newTaskElement);

      const tasksListedDiv = document.getElementById('tasks-listed');
      const newTaskListedElement = document.createElement('div');
      newTaskListedElement.textContent = taskDescription;

      tasksListedDiv.appendChild(newTaskListedElement);

      document.getElementById('new-task-description').value = '';
  });
});
