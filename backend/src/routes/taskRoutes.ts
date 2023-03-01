import express from 'express';
import TaskController from '../api/controllers/TaskController';

const taskRoutes = express.Router();

taskRoutes.get('/', (req, res, next) => new TaskController(req, res, next).getAllTasks());

export default { taskRoutes };