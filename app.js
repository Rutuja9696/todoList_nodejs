const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("express");
const taskRouter = require("./routes/todoRoutes");
const app = express();
// const PORT = 5000;
app.use("./todoList", taskRouter);

// app.get("/todoList/tasks/:id");
// app.patch("/todoList/tasks/:id");
// app.delete("/todoList/tasks/:id");
app.listen(process.env.PORT, console.log(`app started on${process.env.PORT}`));
