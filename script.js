const todoInput = document.getElementById('todoInput');
const addBth = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let todos = [];
function renderTodos() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<li class="empty-state">Пусто!</li>';
        return;
    }

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <input type="checkbox"
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${index})"
            >
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;

        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();

    if (text) {
        todos.push({
            text: text,
            completed: false,
            date: Date.now()
        });

        todoInput.value = '';
        renderTodos();
    }
}
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}


addBth.addEventListener('click',addTodo);

todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTodo();
    }
});

renderTodos()