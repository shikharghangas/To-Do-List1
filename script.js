document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const dingSound = document.getElementById('ding-sound');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', handleCheckboxChange);

        const text = document.createElement('span');
        text.textContent = todoText;
        text.classList.add('todo-text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', handleDeleteButtonClick);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(text);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }

    function handleCheckboxChange(event) {
        const todoItem = event.target.parentElement;
        const todoText = todoItem.querySelector('.todo-text');
        if (event.target.checked) {
            dingSound.play();
            todoText.classList.add('completed');
            todoList.appendChild(todoItem); // Move to bottom
        } else {
            todoText.classList.remove('completed');
        }
    }

    function handleDeleteButtonClick(event) {
        const todoItem = event.target.parentElement;
        todoItem.classList.add('fade-out');
        setTimeout(() => {
            todoList.removeChild(todoItem);
        }, 500); // Match the transition duration
    }
});
