// ===============================
// 1. SELECT ELEMENTS
// ===============================

const form = document.querySelector('form');
const input = document.getElementById('userInput');
const list = document.querySelector('ul');
const reloadBtn = document.getElementById('reload');

// ===============================
// 2. HELPER: GET DATA FROM LOCAL STORAGE
// ===============================

function getStoredTasks() {
  const data = localStorage.getItem('tasks');
  return data ? JSON.parse(data) : [];
}

// ===============================
// 3. HELPER: SAVE DATA TO LOCAL STORAGE
// ===============================

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ===============================
// 4. HELPER: GENERATE UNIQUE ID
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
// ===============================

function generateId() {
  // Generate UUID
  return 'task-' + crypto.randomUUID();
}

// ===============================
// 5. CREATE LIST ITEM (DRY PRINCIPLE)
// ===============================

function createListItem(task) {
  const li = document.createElement('li');

  // Assign the task id to the DOM element
  li.id = task.id;

  li.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'p-2',
    'border-b',
  );

  // Create text element
  const span = document.createElement('span');
  span.textContent = task.content;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.classList.add(
    'bg-red-500',
    'hover:bg-red-400',
    'text-white',
    'px-2',
    'py-1',
    'rounded',
  );

  // Attach click event
  deleteBtn.addEventListener('click', () => {
    console.log('Deleting:', task.id);

    // Remove from localStorage
    const tasks = getStoredTasks();

    const updatedTasks = tasks.filter((t) => t.id !== task.id);

    saveTasks(updatedTasks);

    // Remove from DOM
    li.remove();
  });

  // Append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// ===============================
// 6. RENDER FUNCTION
// ===============================

function renderTasks(tasks) {
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = createListItem(task);
    list.appendChild(li);
  });
}

// ===============================
// 7. HANDLE FORM SUBMIT
// ===============================

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.trim();

  // Prevent empty input
  if (!value) return;

  const tasks = getStoredTasks();

  // Create task object
  const newTask = {
    id: generateId(),
    content: value,
  };

  // Add to beginning (latest on top)
  tasks.unshift(newTask);

  saveTasks(tasks);

  renderTasks(tasks);

  form.reset();
});

// ===============================
// 8. INITIAL LOAD
// ===============================

window.addEventListener('load', () => {
  const tasks = getStoredTasks();
  renderTasks(tasks);
});

// ===============================
// 9. RELOAD BUTTON
// ===============================

reloadBtn.addEventListener('click', () => {
  location.reload();
});
