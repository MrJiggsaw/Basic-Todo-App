const express = require("express");
const db = require("./../db/db");

const router = express.Router();
const {todoController} = require('./../todosControllers/todos');

router.get('/api/v1/todos' , todoController.getAllTodos);
router.post('/api/v1/todos' , todoController.createTodo);
router.post('/api/v1/todos/:id' , todoController.getTodo);
router.delete('/api/v1/todos/:id' , todoController.deleteTodo);
router.put('/api/v1/todos/:id' , todoController.updateTodo);

module.exports = {router};
