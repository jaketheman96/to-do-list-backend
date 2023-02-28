import { Model } from "sequelize/types";

interface Itask {
  id?: number,
  description: string,
  createdAt: Date,
  done: boolean,
}

export const TaskModel = (sequelize: any, DataTypes: any) => {
  class Task extends Model<Itask> implements Itask {
    id!: number;
    description!: string;
    createdAt!: Date;
    done!: boolean;
  }
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Task'
  })
  return Task
}