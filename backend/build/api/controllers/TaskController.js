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
                this._next(error);
            }
        });
    }
    postTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.taskService.postTask(this._req.body);
                return this._res.status(response.status).json(response.message);
            }
            catch (error) {
                this._next(error);
            }
        });
    }
}
exports.default = TaskController;
