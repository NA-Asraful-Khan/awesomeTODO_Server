import express from 'express';
import { addTodo, deleteTodo, getAllToDo, toggleTodoDone, updateTodo } from '../controller/todo_controller.js';

const route = express.Router();


route.get('/todos',getAllToDo)
route.post('/todos',addTodo)
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)


export default route;