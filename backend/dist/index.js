"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const PORT = process.env.API_PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/task', taskRoutes_1.default.taskRoutes);
app.use(ErrorHandler_1.default.handle);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
exports.default = app;
