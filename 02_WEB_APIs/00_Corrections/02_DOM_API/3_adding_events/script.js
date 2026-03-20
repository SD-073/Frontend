// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  itemList.appendChild(newItem);
  itemList.scrollTop = itemList.scrollHeight;
});

alertBtn.addEventListener("click", () => {
  alert("This is an alert message!");
});

consoleBtn.addEventListener("click", () => {
  console.log("Beispiel Text");
});
