const { Student, Task, Teacher } = require("../models");
const {Op} = require("sequelize");
const formatDeadline = require("../helper/formatDeadline")

class Controller {
  static showLogin(req, res) {}
  static showHome(req, res) {
    Student.findAll({
      include: [{
          model: Task,
      }, {
        model: Teacher,
        attributes: ["name"]
      }]
  })
    .then((data) => {
      console.log(data)
      res.render("home", { data, formatDeadline });
    })
    .catch(err => {
      res.send(err);
    })
  }
  static addTaskForm(req,res) {
    let id = req.params.id;
    let studentData = null;
    Student.findByPk(id, {
    })
    .then(data => {
      studentData = data;
      return Teacher.findAll();
    })
    .then(data => {
      res.render("addTask",{studentData, data});
    })
    .catch(err => {
      res.send(err);
    })
  }
  static addTask(req, res) {
    let {taskSubject, teacherId, taskName, taskNumber, deadline} = req.body;
    let datas = {taskSubject, teacherId, taskName, taskNumber, deadline};
    datas.studentId = req.query.studentId;
    console.log(req.body)
    console.log(datas)
    let newTask = {
      taskName: taskName,
      taskDescription: "task deskripsi",
      taskSubject: taskSubject,
      deadline: new Date (deadline),
      
    }
    Task.create(newTask)
    .then(data => {
      Student.update({taskID: data.id, teacherID: teacherId}, {
        where: {
          id: req.query.studentId
        }
      })
    })
    .then(data => {
      res.redirect("/home");
    })
    .catch(err => {
      res.send(err);
    })
  }
}

module.exports = Controller;
