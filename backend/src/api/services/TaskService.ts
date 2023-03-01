import Tasks from "../../database/models/Task";
import Itask from "../../interfaces/Itask";
import statusCodes from "../../utils/statusCode";

class TaskService {
  async getAllTasks(): Promise<Itask[]> {
    const allTasks = await Tasks.findAll()
    return allTasks;
  }

  async getTaskById(id: string): Promise<number | Itask> {
    const task = await Tasks.findByPk(id)
    if (!task) return statusCodes.NOT_FOUND;
    return task;
  }

  async postTask(taskInfos: Itask): Promise<void> {
    await Tasks.create(taskInfos);
    return;
  }

  async editTask(id: string, taskInfos: Itask): Promise<number | void> {
    const idValidation = await this.getTaskById(id);
    if (idValidation === 404) return statusCodes.NOT_FOUND;
    await Tasks.update(taskInfos, { where: { id } });
    return;
  }

  async doneStatus(id: string): Promise<number | void> {
    const idValidation = await this.getTaskById(id);
    if (idValidation === 404) return statusCodes.NOT_FOUND;
    await Tasks.update(
      { done: true },
      { where: { id } }
    );
    return;
  }

  async deleteTask(id: string): Promise<number | void> {
    const idValidation = await this.getTaskById(id);
    if (idValidation === 404) return statusCodes.NOT_FOUND;
    await Tasks.destroy({ where: { id } });
    return;
  }
}

export default TaskService;