const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const API_URL = "/api/todos";

// Fetch and display todos
async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    if (todo.completed) li.classList.add("completed");

    // Toggle complete on click
    li.addEventListener("click", async () => {
      await fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todo.completed })
      });
      loadTodos();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", async (e) => {
      e.stopPropagation(); // stop li click
      await fetch(`${API_URL}/${todo.id}`, { method: "DELETE" });
      loadTodos();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Handle new todo submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = input.value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  input.value = "";
  loadTodos();
});

// Load todos on page load
loadTodos();
