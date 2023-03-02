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
const Task_1 = __importDefault(require("../../database/models/Task"));
const statusCode_1 = __importDefault(require("../../utils/statusCode"));
class TaskService {
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const allTasks = yield Task_1.default.findAll();
            return allTasks;
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield Task_1.default.findByPk(id);
            if (!task)
                return statusCode_1.default.NOT_FOUND;
            return task;
        });
    }
    postTask(taskInfos) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Task_1.default.create(taskInfos);
            return;
        });
    }
    editTask(id, taskInfos) {
        return __awaiter(this, void 0, void 0, function* () {
            const idValidation = yield this.getTaskById(id);
            if (idValidation === 404)
                return statusCode_1.default.NOT_FOUND;
            yield Task_1.default.update(taskInfos, { where: { id } });
            return;
        });
    }
    doneStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idValidation = yield this.getTaskById(id);
            if (idValidation === 404)
                return statusCode_1.default.NOT_FOUND;
            yield Task_1.default.update({ done: true }, { where: { id } });
            return;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idValidation = yield this.getTaskById(id);
            if (idValidation === 404)
                return statusCode_1.default.NOT_FOUND;
            yield Task_1.default.destroy({ where: { id } });
            return;
        });
    }
}
exports.default = TaskService;
