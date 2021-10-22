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
    Teacher.findAll()
    .then(data => {
      res.render("addTask",{data});
    })
    .catch(err => {
      res.send(err);
    })
  }

  static addTask(req, res) {
    let {taskSubject, taskName, taskNumber, deadline, taskDescription} = req.body;
    let newTask = {
      taskName: taskName,
      taskDescription: taskDescription,
      taskSubject: taskSubject,
      deadline: new Date (deadline),
      taskNumber: taskNumber,
    }
    Task.create(newTask)
    .then(data => {
      res.redirect("/home");
    })
    .catch(err => {
      res.send(err);
    })
  }

  static editTaskForm(req, res) {
    let studentId = req.params.id;
    Student.findByPk(studentId, {
      include: [{
        model: Task,
      }]
    })
    .then(data => {
      console.log(data.Task)
      res.render("editTask", {data})
    })
    .catch(err => {
      res.send(err);
    })
  }

  static editTask(req, res) {
    let {description, taskSubject, deadline, taskNumber, progress} = req.body;
    res.send({description, taskSubject, deadline, taskNumber, progress} );
    Student.update({progress:progress})
    .then(data => {
      res.redirect("/home");
    })
  }
}

module.exports = Controller;
