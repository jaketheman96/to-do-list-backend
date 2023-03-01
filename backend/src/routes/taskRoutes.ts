import express from 'express';
import TaskController from '../api/controllers/TaskController';

const taskRoutes = express.Router();

taskRoutes.get('/', (req, res, next) => new TaskController(req, res, next).getAllTasks());

taskRoutes.post('/', (req, res, next) => new TaskController(req, res, next).postTask())

taskRoutes.put('/:id', (req, res, next) => new TaskController(req, res, next).editTask())

export default { taskRoutes };