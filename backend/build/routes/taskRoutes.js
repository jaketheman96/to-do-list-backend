"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = __importDefault(require("../api/controllers/TaskController"));
const taskRoutes = express_1.default.Router();
taskRoutes.get('/', (req, res, next) => new TaskController_1.default(req, res, next).getAllTasks());
taskRoutes.post('/', (req, res, next) => new TaskController_1.default(req, res, next).postTask());
taskRoutes.put('/:id', (req, res, next) => new TaskController_1.default(req, res, next).editTask());
taskRoutes.put('/status/:id', (req, res, next) => new TaskController_1.default(req, res, next).doneStatus());
taskRoutes.delete('/:id', (req, res, next) => new TaskController_1.default(req, res, next).deleteTask());
exports.default = { taskRoutes };
