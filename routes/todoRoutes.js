const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// GET all todos
router.get("/", todoController.getTodos);

// GET a specific todo by ID
router.get("/:id", todoController.getTodoById);

// POST - create a new todo
router.post("/", todoController.createTodo);

// PUT - update a todo
router.put("/:id", todoController.updateTodo);

// DELETE - remove a todo
router.delete("/:id", todoController.deleteTodo);

module.exports = router;

