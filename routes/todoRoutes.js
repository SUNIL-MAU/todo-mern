const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deletTodo,
} = require("../controllers/todoControllers");

router
  .route("/")
  .get(getAllTodos)
  .post(createTodo)
  .put(updateTodo)
  .delete(deletTodo);

module.exports = router;
