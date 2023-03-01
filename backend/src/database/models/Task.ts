import { Model, STRING, INTEGER, BOOLEAN, DATE } from "sequelize";
import db from '.'
import Itask from "../../interfaces/Itask";

class TaskModel extends Model<Itask> {
  declare id: number;
  declare description: string;
  declare createdAt: Date;
  declare done: boolean;
}
TaskModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
    field: 'created_at',
  },
  done: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
})

export default TaskModel;
