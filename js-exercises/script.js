const list = document.getElementById("todos");

const todos = [
  "get groceries",
  "go to the bank",
  "run for president",
  "do laundry"
];

for (let i = 0; i < todos.length; i++) {
  const li = document.createElement("li");
  li.textContent = todos[i];
  // console.log(li.textContent);
  list.appendChild(li);
}