document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
  
    addTaskButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          taskList.removeChild(li);
        });
  
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  
        newTaskInput.value = '';
      }
    }
  });
  