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

  async getAllTasks(): Promise<Response | void> {
    try {
      const allTasksService = await this.taskService.getAllTasks();
      return this._res.status(statusCodes.OK).json(allTasksService);
    } catch (error) {
      return this._next(error)
    }
  }

  async postTask(): Promise<Response | void> {
    try {
      await this.taskService.postTask(this._req.body);
      return this._res.status(statusCodes.CREATED).json({ message: 'Task created!' })
    } catch (error) {
      return this._next(error)
    }
  }

  async editTask(): Promise<Response | void> {
    try {
      const { body, params: { id } } = this._req;
      const response = await this.taskService.editTask(id, body);
      if (response === 404) {
        return this._res.status(statusCodes.NOT_FOUND).json({ message: 'Task not Found!' })
      };
      return this._res.status(statusCodes.OK).json({ message: 'Task updated!' })
    } catch (error) {
      return this._next(error)
    }
  }

  async doneStatus(): Promise<Response | void> {
    try {
      const { id } = this._req.params;
      const response = await this.taskService.doneStatus(id);
      if (response === 404) {
        return this._res.status(statusCodes.NOT_FOUND).json({ message: 'Task not Found!' })
      };
      return this._res.status(statusCodes.OK).json({ message: 'Task done!' })
    } catch (error) {
      return this._next(error)
    }
  }

  async deleteTask(): Promise<Response | void> {
    try {
      const { id } = this._req.params;
      const response = await this.taskService.deleteTask(id);
      if (response === 404) {
        return this._res.status(statusCodes.NOT_FOUND).json({ message: 'Task not Found!' })
      };
      return this._res.status(statusCodes.OK).json({ message: 'Task deleted!' })
    } catch (error) {
      return this._next(error)
    }
  }
}

export default TaskController;
