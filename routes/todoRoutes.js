const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);
// router.route("/tasks/:id").get().patch().delete();

module.exports = router;
