import Tasks from "../../database/models/Task";
import Itask from "../../interfaces/Itask";

class TaskService {
  async getAllTasks(): Promise<Itask[]> {
    const allTasks = await Tasks.findAll()
    return allTasks;
  }

  async postTask(taskInfos: Itask): Promise<void> {
    await Tasks.create(taskInfos);
    return;
  }

  async editTask(id: string, taskInfos: Itask): Promise<void> {
    await Tasks.update(taskInfos, { where: { id } })
    return;
  }

  async doneStatus(id: string): Promise<void> {
    await Tasks.update(
      { done: true },
      { where: { id } }
    );
    return;
  }
}

export default TaskService;