const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

function addTodo(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// addTodo('Something');

addTodoBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();

  if (task) {
    addTodo(task);
    todoInput.value = '';
  } else {
    alert('you cannot submit an empty task');
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
