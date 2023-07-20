import express from 'express';
import { addTodo, getAllToDo, toggleTodoDone } from '../controller/todo_controller.js';

const route = express.Router();


route.get('/todos',getAllToDo)
route.post('/todos',addTodo)
route.get('/todos/:id',toggleTodoDone)


export default route;