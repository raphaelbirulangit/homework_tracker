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
app.get("/task/:id/add", Controller.addTaskForm);
app.post("/task/:id/add", Controller.addTask);
// app.get("")


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
