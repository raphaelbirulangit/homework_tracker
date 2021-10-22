"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Teacher, {
        foreignKey: "teacherID",
      });
      Student.belongsTo(models.Task, {
        foreignKey: "taskID",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      taskID: DataTypes.INTEGER,
      teacherID: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      progress: DataTypes.INTEGER,
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (instance, option) => {
        instance.score = 0;
        instance.progress = 0;
        instance.createdAt = new Date();
        instance.updatedAt = new Date();
      }},
      modelName: "Student",
    }
  );
  return Student;
};
