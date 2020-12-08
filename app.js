const express = require("express");
const dotenv = require("dotenv");
const router = require("express");
const taskRouter = require("./routes/todoRoutes");
const app = express();
const PORT = 5000;
app.use("./todoList", taskRouter);

// app.get("/todoList/tasks/:id");
// app.patch("/todoList/tasks/:id");
// app.delete("/todoList/tasks/:id");
app.listen(PORT, console.log("app started on 5000"));
