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
}

export default TaskService;