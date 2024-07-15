document.addEventListener('DOMContentLoaded', loadTasks);

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
            const taskText = taskInput.value;

            if (taskText.trim() !== '') {
                const li = document.createElement('li');
                li.textContent = taskText;
                taskList.appendChild(li);

                saveTask(taskText);
                taskInput.value = '';
            }
        }

        function saveTask(task) {
            let tasks = localStorage.getItem('tasks');
            if (tasks) {
                tasks = JSON.parse(tasks);
            } else {
                tasks = [];
            }
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            if (tasks) {
                const taskList = document.getElementById('taskList');
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task;
                    taskList.appendChild(li);
                });
            }
        }