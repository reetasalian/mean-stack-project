var express = require('express')

var router = express.Router()

var ToDoController = require('../controllers/todo.controller');

router.get('/', ToDoController.getTodos)
router.post('/create', ToDoController.createTodo)
router.put('/', ToDoController.updateTodo)
router.delete('/:id',ToDoController.removeTodo)

module.exports = router;