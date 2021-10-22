const express = require("express");
const Controller = require("./controllers/controller");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/login", Controller.showLogin);
app.get("/home", Controller.showHome);
app.get("/task/add", Controller.addTaskForm);
app.post("/task/add", Controller.addTask);
app.get("/task/:id/edit", Controller.editTaskForm);
app.post("/task/:id/edit", Controller.editTask);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
