import Tasks from "../../database/models/Task";
import Itask from "../../interfaces/Itask";

class TaskService {
  async getAllTasks(): Promise<Itask[]> {
    const allTasks = await Tasks.findAll()
    return allTasks;
  }
}

export default TaskService;