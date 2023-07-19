import express from 'express';
import { addTodo, getAllToDo } from '../controller/todo_controller.js';

const route = express.Router();


route.get('/todos',getAllToDo)
route.post('/todos',addTodo)

export default route;