"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = __importDefault(require("../../utils/statusCode"));
const TaskService_1 = __importDefault(require("../services/TaskService"));
class TaskController {
    constructor(req, res, next) {
        this._req = req;
        this._res = res;
        this._next = next;
        this.taskService = new TaskService_1.default();
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTasksService = yield this.taskService.getAllTasks();
                return this._res.status(statusCode_1.default.OK).json(allTasksService);
            }
            catch (error) {
                return this._next(error);
            }
        });
    }
    postTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.taskService.postTask(this._req.body);
                return this._res.status(statusCode_1.default.CREATED).json({ message: 'Task created!' });
            }
            catch (error) {
                return this._next(error);
            }
        });
    }
    editTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body, params: { id } } = this._req;
                const response = yield this.taskService.editTask(id, body);
                if (response === 404) {
                    return this._res.status(statusCode_1.default.NOT_FOUND).json({ message: 'Task not Found!' });
                }
                ;
                return this._res.status(statusCode_1.default.OK).json({ message: 'Task updated!' });
            }
            catch (error) {
                return this._next(error);
            }
        });
    }
    doneStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = this._req.params;
                const response = yield this.taskService.doneStatus(id);
                if (response === 404) {
                    return this._res.status(statusCode_1.default.NOT_FOUND).json({ message: 'Task not Found!' });
                }
                ;
                return this._res.status(statusCode_1.default.OK).json({ message: 'Task done!' });
            }
            catch (error) {
                return this._next(error);
            }
        });
    }
    deleteTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = this._req.params;
                const response = yield this.taskService.deleteTask(id);
                if (response === 404) {
                    return this._res.status(statusCode_1.default.NOT_FOUND).json({ message: 'Task not Found!' });
                }
                ;
                return this._res.status(statusCode_1.default.OK).json({ message: 'Task deleted!' });
            }
            catch (error) {
                return this._next(error);
            }
        });
    }
}
exports.default = TaskController;
