// ===============================
// 1. SELECT ELEMENTS
// ===============================

// Select the form (we will listen for submit events)
const form = document.querySelector('form');

// Select the input field
const input = document.getElementById('userInput');

// Select the list (ul) where items will be rendered
const list = document.querySelector('ul');

// Select the reload button
const reloadBtn = document.getElementById('reload');

// ===============================
// 2. HELPER: GET DATA FROM LOCAL STORAGE
// ===============================

function getStoredQuotes() {
  // Get data from localStorage
  const data = localStorage.getItem('quotes');

  // If no data exists yet, return an empty array
  // Otherwise, convert the stored string back to an array
  return data ? JSON.parse(data) : [];
}

// ===============================
// 3. HELPER: SAVE DATA TO LOCAL STORAGE
// ===============================

function saveQuotes(quotes) {
  // Convert the array into a string before saving
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// ===============================
// 4. RENDER FUNCTION (UPDATE UI)
// ===============================

function renderQuotes(quotes) {
  // Clear the list first to avoid duplicates
  list.innerHTML = '';

  // Loop through each quote and create a list item
  quotes.forEach((quote) => {
    const li = document.createElement('li');

    // Set the text content
    li.textContent = quote;

    // Add some basic styling (Tailwind classes)
    li.classList.add('p-2', 'border-b');

    // Append the item to the list
    list.appendChild(li);
  });
}

// ===============================
// 5. HANDLE FORM SUBMISSION
// ===============================

form.addEventListener('submit', function (e) {
  // Prevent default form behavior (page reload)
  e.preventDefault();

  // Get input value and remove extra spaces
  const value = input.value.trim();

  // Do not store empty values
  if (!value) return alert('add a quote');

  // Get current stored quotes
  const quotes = getStoredQuotes();

  // Add the new value to the BEGINNING of the array
  // (Important: newest item should appear at the top)
  quotes.unshift(value);

  // Save updated array back to localStorage
  saveQuotes(quotes);

  // Re-render the list
  renderQuotes(quotes);

  // Reset the form (clear input)
  form.reset();
});

// ===============================
// 6. INITIAL LOAD (WHEN PAGE LOADS)
// ===============================

// When the page loads, retrieve stored data and display it
window.addEventListener('load', function () {
  const quotes = getStoredQuotes();
  renderQuotes(quotes);
});

// ===============================
// 7. RELOAD BUTTON
// ===============================

reloadBtn.addEventListener('click', function () {
  // Reload the page manually
  // Data will persist because it is stored in localStorage
  location.reload();
});
