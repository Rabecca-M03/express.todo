// Import our "database" model
const Todo = require("../models/todomodel");

// GET /api/todos - fetch all todos
exports.getTodos = (req, res) => {
  res.json(Todo.getAll());
};

// GET /api/todos/:id - fetch a single todo
exports.getTodoById = (req, res) => {
  const todo = Todo.getById(parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};

// POST /api/todos - create a new todo
exports.createTodo = (req, res) => {
  const newTodo = {
    id: Date.now(),            // generate a simple unique ID
    title: req.body.title,     // take the title from the request body
    completed: false           // default: not completed
  };
  res.status(201).json(Todo.create(newTodo));
};

// PUT /api/todos/:id - update an existing todo
exports.updateTodo = (req, res) => {
  const updated = Todo.update(parseInt(req.params.id), req.body);
  if (!updated) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(updated);
};

// DELETE /api/todos/:id - remove a todo
exports.deleteTodo = (req, res) => {
  const deleted = Todo.delete(parseInt(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json({ message: "Todo deleted" });
};
