import { NextFunction, Request, Response } from "express";
import statusCodes from "../../utils/statusCode";
import TaskService from "../services/TaskService"

class TaskController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private taskService: TaskService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this.taskService = new TaskService();
  }

  async getAllTasks(): Promise<Response | undefined> {
    try {
      const allTasksService = await this.taskService.getAllTasks();
      return this._res.status(statusCodes.OK).json(allTasksService);
    } catch (error) {
      this._next(error)
    }
  }
}

export default TaskController;
