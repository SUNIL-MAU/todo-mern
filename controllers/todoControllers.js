const Todo = require("../models/todoModels");
const asyncHandler = require("express-async-handler");

const getAllTodos = asyncHandler(async (req, res) => {
  const allTodo = await Todo.find();
  res.send(allTodo);
});

const createTodo = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;
  const todo = await Todo.create({
    title,
    description,
    completed,
  });
  res.send(todo);
});

const updateTodo = asyncHandler(async (req, res) => {
  const todoId = req.query.id;

  const updatedChat = await Todo.findByIdAndUpdate(
    todoId,
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  res.send(updatedChat);
});

const deletTodo = asyncHandler(async (req, res) => {
  const todoId = req.query.id;
  const deleteTodo = await Todo.findByIdAndDelete(todoId);
  res.send(deleteTodo);
});

module.exports = { getAllTodos, createTodo, updateTodo, deletTodo };
