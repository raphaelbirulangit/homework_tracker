"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    

    static associate(models) {
      // define association here
      Task.hasMany(models.Student, {
        foreignKey: "taskID",
      });
    }
  }
  Task.init(
    {
      taskName: DataTypes.STRING,
      taskDescription: DataTypes.STRING,
      taskSubject: DataTypes.STRING,
      deadline: DataTypes.DATE,
      taskNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      hooks:{
        beforeCreate: (instance, options) => {
          instance.createdAt = new Date();
          instance.updateAt = new Date();
        }
      },
      modelName: "Task",
    }
  );
  return Task;
};
